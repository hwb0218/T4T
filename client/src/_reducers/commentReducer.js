import {
  COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_REPLY_COMMENT,
} from "../_actions/types";

const initialState = [];

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS:
      return action.payload;
    case UPDATE_COMMENT:
      return action.payload.concat(state);
    case DELETE_COMMENT:
      const comments = state.filter(
        (comment) => comment._id !== action.payload._id
      );
      return comments;
    case UPDATE_REPLY_COMMENT:
      const updateReplyComment = state.map((comment) =>
        comment._id === action.payload.parentCommentId
          ? { ...comment, ...action.payload.replyComment }
          : comment
      );
      return updateReplyComment;
    default:
      return state;
  }
};

export default commentReducer;
