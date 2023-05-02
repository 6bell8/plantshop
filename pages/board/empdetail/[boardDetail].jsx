import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";

const boardDetail = () => {
  const router = useRouter();
  const params = router.query;
  const { empData, setEmpData } = useStateContext();

  useEffect(() => {}, []);
  console.log(params);
  return (
    <div>
      {/* {empData && (
        <h1>
          작성자 : {empData[params.boardDetail].name}
          <span>{empData[params.boardDetail].id}</span>
        </h1>
      )} */}
    </div>
  );
};

export default boardDetail;
