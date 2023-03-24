import React from "react";
import { urlFor } from "../lib/client";

const Plant = ({ plant: { image, name, slug, price } }) => {
  return (
    <div>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}

      <div className="product-card left">
        <img
          src={urlFor(image && image[0])}
          width={200}
          height={200}
          alt=""
          className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">{price} 원</p>
      </div>
    </div>
  );
};

export default Plant;
