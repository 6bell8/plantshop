import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ plant, flowerpot, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData[0])}
      <div className="products-heading">
        <h2 className="">이번달 베스트 상품</h2>
        <p>다양한 종류의 식물과 소품</p>
      </div>
      <div className="products-container">
        {plant?.map((plant) => plant.name)}
        {/* 화병 map 할 자리 */}
      </div>

      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "plant"]';
  const plant = await client.fetch(query);

  const flowerpotQuery = '*[_type == "flowerpot"]';
  const flowerpot = await client.fetch(flowerpotQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      plant,
      flowerpot,
      bannerData,
    },
  };
};

export default Home;
