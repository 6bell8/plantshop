// node js 표준 서버프레임 워크
const express = require("express");
// body를 파싱해주는 미들웨어
const boddParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// 출/입 허가 서비스
const passport = require("passport");
// 패스워드 암호화 알고리즘
const bcrypt = require("bcrypt");
const expressSession = require("express-session");

const db = require("./db");

const app = express();

app.use(boddParser.json());
app.use(boddParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser("mySecretKey"));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const query =
    "INSERT INTO account (`username`, `password`, `name`) VALUES (?, ?)";
  const query2 = "SELECT * FROM account WHERE username = ?";

  db.query(query2, [username], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send({ message: "이미 존재하는 유저 이름입니다." });
    }
    if (result.length === 0) {
      // 암호화 과정
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.query(query, [username, password, name], (err, result) => {
        if (err) {
          throw err;
        }
        res.send({ message: "생성 완료" });
      });
    }
  });
});

app.listen(3001, () => {
  console.log("서버 3001포트에 연결 중입니다.");
});
