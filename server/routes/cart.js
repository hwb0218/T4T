const express = require("express");
const router = express.Router();
const { Cart } = require("../models/Cart");
const { auth } = require("../middleware/auth");

router.post("/getCartItems", (req, res) => {
  Cart.find({ user: req.body.userId })
    .populate("products.productDetail")
    .exec((err, cart) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        cart: cart.length > 0 ? cart[0].products : cart,
      });
    });
});

router.post("/removeCartItems", (req, res) => {
  Cart.findOneAndUpdate(
    { user: req.body.userId },
    { $pull: { products: { id: req.body.productId } } },
    { new: true }
  )
    .populate("products.productDetail")
    .exec((err, cart) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({ success: true, cart: cart.products });
    });
});

module.exports = router;
