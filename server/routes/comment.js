const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");
const { ReplyComment } = require("../models/ReplyComment");

router.post("/saveComment", async (req, res) => {
  try {
    let comment = new Comment(req.body);
    comment = await comment.save();

    const result = await Comment.find({ _id: comment._id }).populate("writer");

    return res.status(200).json({ success: true, result });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }
});

router.post("/getComments", async (req, res) => {
  try {
    const comments = await Comment.find({ productId: req.body.productId })
      .populate("writer")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, comments });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }
});

router.post("/saveReplyComment", async (req, res) => {
  try {
    let replyComment = new ReplyComment(req.body);
    replyComment = await replyComment.save();

    await Comment.findOneAndUpdate(
      { _id: replyComment.responseTo },
      { answerCompleted: true }
    );

    const result = await ReplyComment.find({ _id: replyComment._id }).populate(
      "writer"
    );

    return res.status(200).json({ success: true, result });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }
});

router.post("/getReplyComments", async (req, res) => {
  try {
    const replyComments = await ReplyComment.find({
      productId: req.body.productId,
    }).populate("writer");

    return res.status(200).json({ success: true, replyComments });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }
});

module.exports = router;
