import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";

const boardDetail = () => {
  const router = useRouter();
  const params = router.query.slug;
  const { empData, setEmpData } = useStateContext();

  return (
    <div>
      {empData && (
        <div>
          <h2>게시글 : {empData[params]?.id}</h2>
          <h1>작성자 : {empData[params]?.name}</h1>
        </div>
      )}
    </div>
  );
};

export default boardDetail;
