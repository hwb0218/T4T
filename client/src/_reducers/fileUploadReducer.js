import { FILE_UPLOAD, CLICK_RIGHT_BTN } from "../_actions/fileUpload/types";

const fileUploadReducer = (state= [], action) => {
    switch (action.type) {
        case FILE_UPLOAD:
            if (state.length === 1) {
                return [action.payload, ...state, action.payload, ...state];
            }
            if (state.length >= 2) {
                state = state.slice(1, state.length - 1);
                return [action.payload, ...state, action .payload, state[0]];
            }
        case CLICK_RIGHT_BTN:
            state = state.slice(1);
            return [...state, action.payload];
        default :
            return state;
    }
}

export default fileUploadReducer;