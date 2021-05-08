const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const reviewSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
    createdDate: {
      type: String,
      default: moment().format("YYYY.MM.DD"),
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
