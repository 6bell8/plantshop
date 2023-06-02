const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ id: req.body.id });
    if (user)
      return res.status(409).send({ message: "사용자의 계정이 존재합니다!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "사용자 등록이 완료되었습니다!" });
  } catch (error) {
    res.status(500).send({ message: "서버내부 에러" });
  }
});

module.exports = router;
