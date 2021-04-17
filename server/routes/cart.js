const express = require("express");
const router = express.Router();
const { Cart } = require("../models/Cart");
const { auth } = require("../middleware/auth");

router.post("/addToCart", auth, (req, res) => {
  const { productId, user } = req.body;

  Cart.findOne({ productId, user }, (err, item) => {
    if (err) {
      return res.json({ success: false, err });
    }
    if (item) {
      return res.json({ duplicate: true, message: "이미 저장되었습니다." });
    } else {
      const cart = new Cart(req.body);

      cart.save((err, item) => {
        if (err) {
          return res.json({ success: false, err });
        }
        Cart.find({ _id: item._id })
          .populate("productId")
          .populate("user")
          .exec((err, result) => {
            if (err) {
              return res.status(400).json({ success: false, err });
            }
            return res.status(200).json({ success: true, result });
          });
      });
    }
  });
});

router.post("/getCartItems", (req, res) => {
  Cart.find({ user: req.body.userId })
    .populate("productId")
    .exec((err, cart) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({ success: true, cart });
    });
});

module.exports = router;
