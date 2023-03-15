import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const ProductCustom = ({ customplant: { image, name, slug, price } }) => {
  return (
    <>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}
      <Link href={`/plant/${slug.current}`}>
        <div className="custom-box">
          <img
            src={urlFor(image && image[0])}
            width={400}
            height={500}
            alt=""
            className="custom-box-image"
          />
        </div>
      </Link>
    </>
  );
};

export default ProductCustom;
