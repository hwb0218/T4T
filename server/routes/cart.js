const express = require("express");
const router = express.Router();
const { Cart } = require("../models/Cart");
const { auth } = require("../middleware/auth");

router.post("/getCartItems", (req, res) => {
  Cart.findOne({ user: req.body.userId })
    .populate("products.productDetail")
    .exec((err, cart) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      console.log(cart);
      return res.status(200).json({ success: true, cart: cart.products });
    });
});
//
// router.post("/removeCartItems", (req, res) => {
//   Cart.findOneAndUpdate({ _id: req.body.id }).exec((err, result) => {
//     if (err) {
//       return res.status(400).json({ success: false, err });
//     }
//     return res.status(200).json({ success: true, result });
//   });
// });

module.exports = router;
