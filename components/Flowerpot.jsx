import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Flowerpot = ({ flowerpot: { image, name, slug, price } }) => {
  return (
    <div>
      <div className="product-card right">
        <img
          src={urlFor(image && image[0])}
          alt=""
          width={200}
          height={200}
          className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">{price} 원</p>
      </div>
    </div>
  );
};

export default Flowerpot;
