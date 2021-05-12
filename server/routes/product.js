const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Product } = require("../models/Product");
const { Cart } = require("../models/Cart");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
    fileFilter(req, file, cb) {
      const ext = path.extname(file.originalname);
      if (
        ext !== ".png" &&
        ext !== ".jpg" &&
        ext !== ".gif" &&
        ext !== ".jpeg"
      ) {
        return cb(
          res.status(400).end("png, jpeg, jpg, gif 파일만 업로드 가능합니다.")
        );
      }
      cb(null, true);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
}).array("img");

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      files: req.files.map(({ path }) => path),
    });
  });
});

router.post("/", (req, res) => {
  const product = new Product(req.body);
  product.save((err, doc) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/products", (req, res) => {
  let findArgs = {};

  Object.entries(req.body.filters).forEach(([key, value]) => {
    if (key === "destination" && value.length > 0) {
      findArgs[key] = value;
    } else if (key === "price") {
      findArgs[key] = {
        $gte: value.length === 0 ? 0 : value[0],
        $lte: value.length === 0 ? 1000000000 : value[1],
      };
    } else if (key === "rating" && value.length > 0) {
      findArgs[key] = {
        $gte: value[0],
        $lte: value[value.length - 1] + 1,
      };
    }
  });

  console.log(findArgs);
  Product.find(findArgs)
    .populate("seller")
    .exec((err, productInfo) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res
        .status(200)
        .json({ success: true, productInfo, postSize: productInfo.length });
    });
});

router.get("/products_by_id", (req, res) => {
  let { id } = req.query;

  Product.find({ _id: id })
    .populate("seller")
    .exec((err, product) => {
      if (err) {
        return res.status(400).send(err);
      }
      product[0].views++;
      product[0].save();
      return res.status(200).json({ success: true, product });
    });
});

router.post("/addToCart", async (req, res) => {
  const { productId, user, amount } = req.body;

  try {
    let cart = await Cart.findOne({ user });

    if (cart) {
      const itemIndex = cart.products.findIndex(
        (product) => product.id === productId
      );
      if (itemIndex > -1) {
        return res.json({ duplicate: true, message: "중복 된 상품입니다." });
      } else {
        cart.products.push({
          id: productId,
          productDetail: productId,
          quantity: amount,
        });
      }
      cart = await cart.save();
      return res.status(200).json({ success: true, cart });
    } else {
      const newCart = await Cart.create({
        user,
        products: [
          { id: productId, productDetail: productId, quantity: amount },
        ],
      });
      return res.status(200).json({ success: true, cart: newCart });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
