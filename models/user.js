const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  passwordCheck: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    id: Joi.string().required().label("username"),
    password: Joi.string().required().label("password"),
    passwordCheck: Joi.string().label("passwordcheck"),
    name: Joi.string().required().label("name"),
    phone: Joi.number().label("phone"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
