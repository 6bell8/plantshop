const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");

//로그인 구현
// res 뒤에는 상태 req 뒤에는 body
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res
        .status(401)
        .send({ message: "잘못 된 계정 또는 비밀번호입니다." });

    // 해시 함수 처리 된 암호 그대로 비교
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res
        .status(401)
        .send({ message: "잘못 된 계정 또는 비밀번호입니다." });

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "로그인 되셨습니다." });
  } catch (error) {
    res.status(500).send({ message: "서버 오류" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    username: Joi.toString().required().label("계정"),
    password: Joi.toString().required().label("패스워드"),
  });
  return schema.validate(data);
};

module.exports = router;
