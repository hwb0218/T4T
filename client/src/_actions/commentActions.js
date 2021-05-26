import {
  COMMENTS,
  SAVE_COMMENT,
  MODIFY_COMMENT,
  DELETE_COMMENT,
  UPDATE_REPLY_COMMENT,
} from "./types";

export const setComments = (comments) => {
  return {
    type: COMMENTS,
    payload: comments,
  };
};

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const modifyComment = (comment, commentId) => {
  return {
    type: MODIFY_COMMENT,
    payload: { comment, commentId },
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
