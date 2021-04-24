const express = require("express");
const router = express.Router();
const { Payment } = require("../models/Payment");
const { Cart } = require("../models/Cart");

router.post("/buyProducts", async (req, res) => {
  const { user, products, date } = req.body;

  try {
    let payment = await Payment.findOneAndUpdate(
      { user, createdDate: date },
      { $push: { products: products } },
      { new: true }
    ).populate("products.productDetail");

    if (!payment) {
      payment = await Payment.create({
        user,
        products,
      });
    }
    return res.status(200).json({ success: true, payment });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
