import { FILE_UPLOAD } from "../_actions/fileUpload/types";

const fileUploadReducer = (state= [], action) => {
    switch (action.type) {
        case FILE_UPLOAD:
            return [...state, action.payload];
        default :
            return state;
    }
}

export default fileUploadReducer;