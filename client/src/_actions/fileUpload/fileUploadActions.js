import { FILE_UPLOAD } from "./types";

export const fileUpload = (fileName) => {
    return {
        type: FILE_UPLOAD,
        payload: fileName
    };
}