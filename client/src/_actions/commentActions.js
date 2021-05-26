import {
  COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_REPLY_COMMENT,
} from "./types";

export const setComments = (comments) => {
  return {
    type: COMMENTS,
    payload: comments,
  };
};

export const updateComment = (newComment) => {
  return {
    type: UPDATE_COMMENT,
    payload: newComment,
  };
};

export const deleteComment = (deletedComment) => {
  return {
    type: DELETE_COMMENT,
    payload: deletedComment,
  };
};

export const updateReplyComment = (replyComment, parentCommentId) => {
  return {
    type: UPDATE_REPLY_COMMENT,
    payload: { replyComment, parentCommentId },
  };
};
