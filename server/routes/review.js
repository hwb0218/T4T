const express = require("express");
const router = express.Router();
const { Review } = require("../models/Review");
const { Payment } = require("../models/Payment");

router.post("/saveReview", async (req, res) => {
  try {
    const { user, product } = req.body;

    const review = new Review(req.body);
    await review.save();

    await Payment.findOneAndUpdate(
      { user, "products._id": product },
      { $set: { "products.$.reviewRegistration": true } }
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;
