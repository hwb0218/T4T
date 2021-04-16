const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const commentSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  responseTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  createdAt: {
    type: String,
    default: moment().format("YYYY.MM.DD"),
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
