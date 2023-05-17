import { React, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const Localviewed = () => {
  const router = useRouter();
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  // const [link, setLink] = useState([]);

  useEffect(() => {
    const title = localStorage.getItem("watched");
    const img = localStorage.getItem("watched2");
    // const link = localStorage.getItem("watched3");
    setTitle(JSON.parse(title));
    setImg(JSON.parse(img));
    // setLink(JSON.parse(item));
  }, []);

  console.log(title);
  console.log(img);

  return (
    <div className="viewed-wrapper">
      <div className="viewed-box">
        <p className="viewed-title">최근 본 상품</p>
        {title.map((item, i) => (
          <p className="viewed-name" key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Localviewed;
