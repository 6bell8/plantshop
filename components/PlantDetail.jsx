import React from "react";
import Link from "next/link"; // 제품에 연결하기위해서 next link를 가져오기

import { urlFor } from "../lib/client";

const PlantDetail = ({ slideBanner: { image, name, slug, price } }) => {
  return (
    <div>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}
      <Link href={`/slideBanner/${slug.current}`}>
        <div className="product-card product-card-02">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            alt=""
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price} 원</p>
        </div>
      </Link>
    </div>
  );
};

export default PlantDetail;
