const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
        fileFilter(req, file, cb) {
            const ext = path.extname(file.originalname);
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return cb(res.status(400).end('png, jpeg, jpg, gif 파일만 업로드 가능합니다.'));
            }
            cb(null, true);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
}).single('img');

router.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return req.json({ success: false, err })
        }
        return res.status(200).json({ success: true, filePath: req.file.path, fileName: req.file.filename });
    })
});

module.exports = router;