import { FILE_UPLOAD, CLICK_RIGHT_BTN } from "./types";

export const fileUpload = (fileName) => {
    return {
        type: FILE_UPLOAD,
        payload: fileName
    };
}

export const clickRightBtn = (image) => {
    return {
        type: CLICK_RIGHT_BTN,
        payload: image
    }
}