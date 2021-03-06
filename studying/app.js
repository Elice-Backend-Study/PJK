"use strict"

//login 화면만들기
//express 서버 만든 것 가져오기



const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// const PORT = 3003;  //직접 포트번호 하드코딩하지 않기!
//앱 세팅
// views/home 폴더 만들고 그 안에 index.ejs, login.ejs 파일만들기
//npm install ejs -s 

app.set("views", "./src/views"); //views는 studying/views를 기본 경로로 하겠다
app.set("view engine", "ejs");  //뷰 엔진은 ejs로 하겠다 -> npm install  필요
//javascript의 login.js를 views/home/login.ejs와 연결위해 미들웨어 사용
app.use(express.static(`${__dirname}/src/public`))

app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended:true}));

const home = require("./src/routes/home");  // 루트 경로로 오면 home으로 이동하도록 경로 설정
app.use("/", home);  //.use()는 middleware등록 매서드



module.exports = app;