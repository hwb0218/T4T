// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
//
// fs.readdir('uploads', (err) => {
//     if (err) {
//         fs.mkdirSync('uploads');
//     }
// });
//
// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, cb) {
//             cb(null, 'uploads/');
//         },
//         filename(req, file, cb) {
//             const ext = path.extname(file.originalname);
//             cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//         },
//         fileFilter(req, file, cb) {
//             const ext = path.extname(file.originalname);
//             if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//                 return cb(res.status(400).end('png, jpeg, jpg, gif 파일만 업로드 가능합니다.'));
//             }
//             cb(null, true);
//         }
//     }),
//     limits: { fileSize: 5 * 1024 * 1024 },
// });
//
// router.post('/upload', upload.array('img'), (req, res) => {
//     console.log('req.files',req.files);
//     console.log('req.body',req.body)
//     res.status(200).json({ url: `/img/${req.files.filename}`});
// });
//
// module.exports = router;