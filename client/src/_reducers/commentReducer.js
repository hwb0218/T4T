import {
  COMMENTS,
  SAVE_COMMENT,
  MODIFY_COMMENT,
  DELETE_COMMENT,
  UPDATE_REPLY_COMMENT,
} from "../_actions/types";

const initialState = [];

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS:
      return action.payload;
    case SAVE_COMMENT:
      return action.payload.concat(state);
    case MODIFY_COMMENT:
      const modifyComment = state.map((comment) =>
        comment._id === action.payload.commentId
          ? { ...comment, ...action.payload.comment }
          : comment
      );
      return modifyComment;
    case DELETE_COMMENT:
      const comments = state.filter(
        (comment) => comment._id !== action.payload._id
      );
      return comments;
    case UPDATE_REPLY_COMMENT:
      const updateReplyComment = state.map((replyComment) =>
        replyComment._id === action.payload.parentCommentId
          ? { ...replyComment, ...action.payload.replyComment }
          : replyComment
      );
      return updateReplyComment;
    default:
      return state;
  }
};

export default commentReducer;
