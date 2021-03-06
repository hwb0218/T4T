const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const commentSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    content: {
      type: String,
    },
    answerCompleted: {
      type: Boolean,
      default: false,
    },
    replyComment: {
      type: String,
    },
    createdDate: {
      type: String,
      default: moment().format("YYYY.MM.DD"),
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
