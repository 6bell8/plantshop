const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("데이터 베이스와 연결되었습니다!");
  } catch (error) {
    console.log(error);
    console.log("연결에 실패하였습니다.");
  }
};
