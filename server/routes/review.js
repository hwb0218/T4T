const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { Review } = require("../models/Review");
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
    const { user, product } = req.body;

    const review = new Review(req.body);
    await review.save();

    await Payment.findOneAndUpdate(
      { user, "products._id": product },
      { $set: { "products.$.reviewRegistration": true } }
    );

    const histories = await descendingOrder(user);

    return res.status(200).json({ success: true, histories });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;
