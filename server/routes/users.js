const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "인증 실패, 이메일을 찾을 수 없습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }
      user.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }
        res.cookie("w_authExp", user.tokenExp);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    cart: req.user.cart,
    history: req.user.history,
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.status(200).send({
        logoutSuccess: true,
      });
    }
  );
});

// router.post("/addToCart", auth, (req, res) => {
//   User.findOne({ _id: req.user._id }, (err, userInfo) => {
//     let duplicate = false;
//     userInfo.cart.forEach((cartItem) => {
//       if (cartItem.id === req.body.productId) {
//         duplicate = true;
//         return res.json({ duplicate });
//       }
//     });
//
//     if (err) {
//       return res.json({
//         addToCartSuccess: false,
//         message: "유저를 찾을 수 없습니다.",
//       });
//     }
//
//     if (!duplicate) {
//       User.findOneAndUpdate(
//         { _id: req.user._id },
//         {
//           $push: {
//             cart: { id: req.body.productId, quantity: 1, date: Date.now() },
//           },
//         },
//         { new: true },
//         (err, result) => {
//           if (err) {
//             return res.status(400).json({ addToCartSuccess: false, err });
//           }
//           return res
//             .status(200)
//             .json({ addToCartSuccess: true, result: result.cart });
//         }
//       );
//     }
//   });
// });

module.exports = router;
