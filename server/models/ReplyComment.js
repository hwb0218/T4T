const mongoose = require("mongoose");
const { Schema } = mongoose;

const replyCommentSchema = new Schema(
  {
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
      ref: "Comment",
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const ReplyComment = mongoose.model("ReplyComment", replyCommentSchema);

module.exports = { ReplyComment };
