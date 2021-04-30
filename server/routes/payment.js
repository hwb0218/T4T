const express = require("express");
const router = express.Router();
const { Payment } = require("../models/Payment");
const { Cart } = require("../models/Cart");

router.post("/buyProducts", async (req, res) => {
  const { user, products, date } = req.body;
  const productIds = products.map(({ _id }) => _id);
  console.log(productIds);

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
    res.status(500).send("Something went wrong");
  }
});

router.post("/history", async (req, res) => {
  const history = await Payment.find({ user: req.body.userId }).populate(
    "products.productDetail"
  );
  return res.status(200).json({ success: true, history });
});

router.post("/cancelPayment", async (req, res) => {
  const { user, createdMonth, _id } = req.body;

  const payment = await Payment.findOneAndUpdate(
    { user, createdMonth },
    { $pull: { products: { _id: _id } } },
    { new: true }
  );

  return res.status(200).json({ success: true, payment });
});

module.exports = router;
