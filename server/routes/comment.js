const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");
const { ReplyComment } = require("../models/ReplyComment");

router.post("/saveComment", (req, res) => {
  const comment = new Comment(req.body);

  comment.save((err, comment) => {
    if (err) {
      return res.json({ success: false, err });
    }
    Comment.find({ _id: comment._id })
      .populate("writer")
      .exec((err, result) => {
        if (err) {
          return res.status(400).json({ success: false, err });
        }
        console.log(result);
        return res.status(200).json({ success: true, result });
      });
  });
});

router.post("/getComments", (req, res) => {
  Comment.find({ productId: req.body.productId })
    .populate("writer")
    .sort({ createdAt: -1 })
    .exec((err, comments) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).json({ success: true, comments });
    });
});

router.post("/saveReplyComment", (req, res) => {
  const replyComment = new ReplyComment(req.body);

  replyComment.save((err, replyComment) => {
    if (err) {
      return res.json({ success: false, err });
    }
    ReplyComment.find({ _id: replyComment._id })
      .populate("writer")
      .exec((err, result) => {
        if (err) {
          return res.json({ success: false, err });
        }
        return res.status(200).json({ success: true, result });
      });
  });
});

module.exports = router;
