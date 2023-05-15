import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const Localviewed = () => {
  const router = useRouter();

  return (
    <div className="viewed-wrapper">
      <div className="viewed-box">
        <p className="viewed-title">최근 본 상품</p>
      </div>
    </div>
  );
};

export default Localviewed;
