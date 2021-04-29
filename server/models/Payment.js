const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productDetail: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        purchaseDate: {
          type: String,
          default: moment().format("YYYY.MM.DD"),
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    createdMonth: {
      type: String,
      default: moment().format("YYYY.MM"),
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = { Payment };