const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { Payment } = require("../models/Payment");
const { Cart } = require("../models/Cart");

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

router.post("/buyProducts", async (req, res) => {
  const { user, products, date } = req.body;
  const productIds = products.map(({ _id }) => _id);

  try {
    const payment = await Payment.findOneAndUpdate(
      { user, createdMonth: date },
      { $push: { products: products } },
      { new: true }
    );

    if (!payment) {
      Payment.create({
        user,
        products,
      });
    }

    const cart = await Cart.findOneAndUpdate(
      { user },
      { $pull: { products: { _id: { $in: productIds } } } },
      { new: true }
    );

    return res.status(200).json({ success: true, cart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err });
  }
});

router.post("/history", async (req, res) => {
  const { userId } = req.body;

  const histories = await descendingOrder(userId);

  return res.status(200).json({ success: true, histories });
});

router.post("/orderConfirmation", async (req, res) => {
  const { user, createdMonth, productId } = req.body;

  try {
    await Payment.findOneAndUpdate(
      { user, createdMonth, "products._id": productId },
      { $set: { "products.$.orderConfirmation": true } }
    );

    const histories = await descendingOrder(user);

    return res.status(200).json({ success: true, histories });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err });
  }
});

router.post("/cancelPayment", async (req, res) => {
  const { user, createdMonth, productId } = req.body;

  try {
    await Payment.findOneAndUpdate(
      { user, createdMonth },
      { $pull: { products: { _id: productId } } }
    );

    await Payment.deleteOne({ products: { $exists: true, $size: 0 } });

    const histories = await descendingOrder(user);

    return res.status(200).json({ success: true, histories });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;
