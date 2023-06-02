require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("../db");
const userRoutes = require("./pages/users");
const authRoutes = require("./pages/auth");

//데이터베이스 커넥션
connection();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`${port}포트를 사용 중입니다.`));
