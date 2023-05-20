import { React, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Localviewed = () => {
  const router = useRouter();
  const [active, setActive] = useState(true);
  const [title, setTitle] = useState([]);
  const [link, setLink] = useState([]);
  const [viewedImg, setViewedImg] = useState([]);

  useEffect(() => {
    const title = localStorage.getItem("watched");
    const link = localStorage.getItem("watched02");
    const viewedImg = localStorage.getItem("watched03");
    setTitle(JSON.parse(title));
    setLink(JSON.parse(link));
    setViewedImg(JSON.parse(viewedImg));
  }, [router]);

  if (title == null) {
    undefined;
  } else if (title.length >= 4) {
    title.pop();
    link.pop();
    viewedImg.pop();
  }

  return (
    <div className="viewed-container">
      <div className="viewed-toggle">
        <span
          className={`viewed-arrow ${active === false ? "active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <BsFillArrowUpCircleFill size={28} className="viewed-arrow-icon" />
        </span>
        <p className="viewed-title">최근 본 상품</p>
      </div>
      <div className={`viewed-wrapper ${active === false ? "active" : ""}`}>
        <div className="viewed-box">
          <div className="viewed-products">
            {title?.map((item, i) => (
              <div
                className="viewed-product"
                key={i}
                // props로 받을 경우 화살표 함수 function으로 받을 때는 그냥 사용해도 무방함
                onClick={() => router.push("/slideBanner/" + link[i])}
              >
                <AiFillDelete size={20} className="viewed-product-btn" />

                <img
                  className="viewed-img"
                  src={`https://cdn.sanity.io/images/vi5m7ynh/production/${viewedImg[i]}`}
                />
                <p className="viewed-name">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localviewed;
