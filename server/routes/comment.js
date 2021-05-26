const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");

router.post("/saveComment", async (req, res) => {
  try {
    let comment = new Comment(req.body);
    comment = await comment.save();

    const result = await Comment.find({ _id: comment._id }).populate("writer");

    return res.status(200).json({ success: true, result });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

router.post("/getComments", async (req, res) => {
  try {
    const comments = await Comment.find({ productId: req.body.productId })
      .populate("writer")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, comments });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

router.post("/deleteComment", async (req, res) => {
  try {
    const { commentId } = req.body;

    const comment = await Comment.findOneAndDelete({ _id: commentId });

    return res.status(200).json({ success: true, comment });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

router.post("/saveReplyComment", async (req, res) => {
  try {
    const { parentCommentId, replyComment } = req.body;

    const comment = await Comment.findOneAndUpdate(
      { _id: parentCommentId },
      { replyComment, answerCompleted: true },
      { new: true }
    ).populate("writer");

    return res.status(200).json({ success: true, comment });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

router.post("/deleteReplyComment", async (req, res) => {
  try {
    const { parentCommentId } = req.body;

    const comment = await Comment.findOneAndUpdate(
      { _id: parentCommentId },
      { replyComment: "", answerCompleted: false },
      { new: true }
    ).populate("writer");

    return res.status(200).json({ success: true, comment });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

module.exports = router;
