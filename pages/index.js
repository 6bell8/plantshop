import React from "react";
import Link from "next/link";
import { client } from "../lib/client";
import {
  Plant,
  Flowerpot,
  FooterBanner,
  HeroBanner,
  ProductCustom,
  ProductCustom02,
} from "../components";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

const Home = ({
  plant,
  flowerpot,
  bannerData,
  customplant,
  customFlowerpot,
}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2 className="">마음에 드는 식물을 커스텀 해보세요!</h2>
        <p>choice your plant & Flowerpot.</p>
      </div>
      <div className="products-container">
        <div className="custom-boxs">
          {/* 커스텀 식물 */}

          <Swiper>
            {customplant?.map((customplant) => (
              <SwiperSlide>
                <ProductCustom customplant={customplant} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 커스텀 화병 */}
          <Swiper>
            {customFlowerpot?.map((customFlowerpot) => (
              <SwiperSlide>
                <ProductCustom02 customFlowerpot={customFlowerpot} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="products-wrap">
          {/*  식물 리스트*/}
          <Swiper
            // spaceBetween={0}
            // direction={{ verical: true }}
            // scrollbar={{ draggable: true }}
            // navigation
            // loop={true}
            // autoplay={true}
            // slidesPerView={1}
            // pagination={{ clickable: true }}
            // breakpoints={{}}
            className="products-box"
          >
            {plant?.map((plant) => (
              <SwiperSlide>
                <Plant key={plant._id} plant={plant} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/*  화분 리스트*/}
          <Swiper
            // height={200}
            // spaceBetween={20}
            // slidesPerView={3}
            // direction={{ verical: true }}
            // scrollbar={{ draggable: true }}
            // navigation
            // loop={true}
            // pagination={{ clickable: true }}
            className="products-box"
          >
            {flowerpot?.map((flowerpot) => (
              <SwiperSlide>
                <Flowerpot key={flowerpot._id} flowerpot={flowerpot} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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

  // plant 인자와 다르게 생성하기 위해서 custom 파트를 새로 생성
  const customQuery = '*[_type == "plant"]';
  const customplant = await client.fetch(customQuery);

  const customQuery02 = '*[_type == "flowerpot"]';
  const customFlowerpot = await client.fetch(customQuery02);

  return {
    props: {
      plant,
      flowerpot,
      bannerData,
      customplant,
      customFlowerpot,
    },
  };
};

export default Home;
