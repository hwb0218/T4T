const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// const config = require('./config/key');
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const cors_origin = ['http://localhost:3000'];
app.use(
    cors({
        origin: cors_origin, // 허락하고자 하는 요청 주소
        credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});