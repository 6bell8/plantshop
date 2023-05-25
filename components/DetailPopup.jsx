import { useState, React, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { useStateContext } from "../context/StateContext";

const DetailPopup = () => {
  // const { detailPopup, setDetailPopup } = useStateContext();
  // console.log(detailPopup);
  return (
    <div className="detail-agreement">
      <p className="popup-title">
        개인정보 약관을 빙자한 히든박스입니다. 디테일하게 봐주셔서 감사합니다.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio rerum,
        excepturi soluta minima dolorum sequi obcaecati nisi quos laboriosam
        reprehenderit provident incidunt ab molestiae ipsam ratione rem alias
        fuga blanditiis.
      </p>
    </div>
  );
};

export default DetailPopup;
