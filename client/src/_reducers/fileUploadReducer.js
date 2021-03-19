import { FILE_UPLOAD, CLICK_RIGHT_BTN } from "../_actions/fileUpload/types";

const fileUploadReducer = (state= [], action) => {
    switch (action.type) {
        case FILE_UPLOAD:
            return [...state, action.payload];
        case CLICK_RIGHT_BTN:
            state = state.slice(1);
            return [...state, action.payload];
        default :
            return state;
    }
}

export default fileUploadReducer;