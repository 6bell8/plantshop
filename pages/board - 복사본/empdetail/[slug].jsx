import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";

const empDetail = () => {
  const router = useRouter();
  const params = router.query.slug;
  const { empData, setEmpData } = useStateContext();

  return (
    <div>
      {empData && (
        <div className="board-detail-container">
          <h4 className="board-detail board-detail-num">
            번호 : {empData[params]?.id}
          </h4>
          <h4 className="board-detail board-detail-id">
            아이디 : {empData[params]?.username}
          </h4>
          <h4 className="board-detail board-detail-name">
            작성자 : {empData[params]?.name}
          </h4>
          <p className="board-detail board-detail-phone">
            연락처 : {empData[params]?.phone}
          </p>
          <p className="board-detail board-detail-contact">
            문의내용 : {empData[params]?.qa}
          </p>
          <button
            className="board-detail-btn"
            onClick={() => {
              router.push("/board");
            }}
          >
            뒤로가기
          </button>
        </div>
      )}
    </div>
  );
};

export default empDetail;
