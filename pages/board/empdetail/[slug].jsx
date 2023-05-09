import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";
import { BsFillPeopleFill, BsFillPhoneFill } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";

const empDetail = () => {
  const router = useRouter();
  const params = router.query.slug;
  const { empData, setEmpData } = useStateContext();

  const [id, idChange] = useState("");
  // e.target.value
  const [username, usernameChange] = useState("");
  const [name, nameChange] = useState("");
  const [qa, qaChange] = useState("");
  const [phone, phoneChange] = useState("");

  return (
    <div className="board-detail-container">
      <div className="page-title-box">
        <h1 className="page-title">더보기</h1>
        <p className="page-subtitle">
          <input
            value={id}
            disabled
            className="form-control"
            placeholder={empData[params]?.id + "th"}
          />
        </p>
      </div>
      {empData && (
        <div className="board-detail-wrapper">
          <div className="card">
            <div className="row">
              <div className="row-col">
                <label className="form-label">
                  <BsFillPeopleFill color="#35dd51" />
                </label>
                <h4 className="form-control username">
                  {empData[params]?.username}
                  <span className="form-subTitle">{empData[params]?.name}</span>
                </h4>
              </div>
              <div className="row-col board-textarea">
                <label>
                  <BiBookContent color="#35dd51" />
                </label>
                <h4 className="form-qa">{empData[params]?.qa}</h4>
              </div>
              <div className="row-col phone">
                <label className="form-label">
                  <BsFillPhoneFill color="#35dd51" />
                </label>
                <h4 className="form-control">{empData[params]?.phone}</h4>
              </div>
              <button
                className="form-btn"
                onClick={() => {
                  router.push("/board");
                }}
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default empDetail;
