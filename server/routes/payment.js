const express = require("express");
const router = express.Router();
const { Payment } = require("../models/Payment");
const { Cart } = require("../models/Cart");

router.post("/successBuy", async (req, res) => {
  const { user, productId, products, date } = req.body;

  try {
    let payment = await Payment.findOneAndUpdate(
      { user, createdDate: date },
      { $push: { products: products } },
      { new: true }
    );

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
// try {
//   let payment = await Payment.findOne({ user, createdDate: date });
//   console.log(payment);
//   if (payment) {
//     payment.products.push({ productDetail: productId });
//     payment = await payment.save();
//     return res.status(200).json({ success: true, payment });
//   } else {
//     const newPayment = await Payment.create({
//       user,
//       products: products ? products : [{ productDetail: productId }],
//     });
//     return res.status(200).json({ success: true, payment: newPayment });
//   }
// } catch (err) {
//   console.log(err);
//   res.status(500).send("Something went wrong");
// }
