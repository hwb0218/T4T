const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { Review } = require("../models/Review");
const { Product } = require("../models/Product");
const { Payment } = require("../models/Payment");

const descendingOrder = async (userId) => {
  const histories = await Payment.aggregate([
    {
      $match: { user: ObjectId(userId) },
    },
    { $unwind: "$products" },
    { $sort: { "products.createdAt": -1 } },
    {
      $lookup: {
        from: "products",
        localField: "products.productDetail",
        foreignField: "_id",
        as: "products.productDetail",
      },
    },
    { $unwind: "$products.productDetail" },
    {
      $group: {
        products: { $push: "$products" },
        _id: "$_id",
        user: { $first: "$user" },
        createdMonth: { $first: "$createdMonth" },
      },
    },
  ]).sort({ createdMonth: -1 });

  return histories;
};

router.post("/saveReview", async (req, res) => {
  try {
    const { user, product, rating, review, productDetail } = req.body;

    const ValueOfField = {
      writer: user,
      rating,
      review,
      product: productDetail,
    };

    const newReview = new Review(ValueOfField);
    await newReview.save();

    const average = await Review.aggregate([
      { $match: { product: ObjectId(productDetail) } },
      { $group: { _id: null, avg: { $avg: "$rating" } } },
      { $project: { _id: "$product", roundedAvg: { $round: ["$avg", 2] } } },
    ]);

    await Product.findOneAndUpdate(
      { _id: productDetail },
      { $set: { rating: average[0].roundedAvg } }
    );

    await Payment.findOneAndUpdate(
      { user, "products._id": product },
      { $set: { "products.$.reviewRegistration": true } }
    );

    const histories = await descendingOrder(user);

    return res.status(200).json({ success: true, histories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, err });
  }
});

router.post("/getReview", async (req, res) => {
  try {
    const { product } = req.body;

    const review = await Review.find({ product })
      .populate("writer")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;
