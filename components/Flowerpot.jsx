import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Flowerpot = ({ flowerpot: { image, name, slug, price } }) => {
  return (
    <>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}

      <Link href={`/flowerpot/${slug.current}`}>
        <div className="product-card right">
          <img
            src={urlFor(image && image[0])}
            width={200}
            height={200}
            alt=""
            className="product-image"
          />
        </div>
      </Link>
    </>
  );
};

export default Flowerpot;
