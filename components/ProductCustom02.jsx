import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const ProductCustom02 = ({ customFlowerpot: { image, name, slug, price } }) => {
  return (
    <>
      {/* 링크 태그 안에 태그를 추가해야 오류가 풀림 */}
      <Link href={`/flowerpot/${slug.current}`}>
        <div className="custom-box02">
          <img
            src={urlFor(image && image[0])}
            width={450}
            // height={400}
            alt=""
            className="custom-box-image"
          />
        </div>
      </Link>
    </>
  );
};

export default ProductCustom02;
