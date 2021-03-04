const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.status(200).json({
            success: true
        });
    });
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: '인증 실패, 이메일을 찾을 수 없습니다.'
            });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
           if (!isMatch) {
               return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.'});
           }
            user.generateToken((err, user) => {

            })
        });
    });
});