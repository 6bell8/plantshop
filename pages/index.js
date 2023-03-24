import { React, useState } from "react";
import { client } from "../lib/client";
import {
  Plant,
  Flowerpot,
  HeroBanner,
  PlantDetail,
  ProductCustom,
  ProductCustom02,
} from "../components";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Home = ({
  plant,
  flowerpot,
  bannerData,
  customplant,
  customFlowerpot,
  slideBanner,
}) => {
  const [activeThumb, setAcitiveThumb] = useState(null);
  const [activeThumb02, setAcitiveThumb02] = useState(null);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2 className="products-h2">Custom your plant!</h2>
        <p className="products-p">
          마음에 드는 식물이나 화분을 클릭하면 주문 화면으로 이동됩니다.
        </p>
      </div>
      <div className="products-container">
        <div className="custom-boxs">
          {/* 커스텀 식물 */}
          <Swiper
            className="custom-product custom-plant"
            loop={true}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {customplant?.map((customplant, i) => (
              <SwiperSlide key={i}>
                <ProductCustom customplant={customplant} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 커스텀 화병 */}
          <Swiper
            className="custom-product custom-flowerpot"
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            thumbs={{ swiper: activeThumb02 }}
          >
            {customFlowerpot?.map((customFlowerpot, i) => (
              <SwiperSlide key={i}>
                <ProductCustom02 customFlowerpot={customFlowerpot} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="products-wrap">
          {/*  식물 리스트*/}
          <Swiper
            className="plant-product-thumbs"
            onSwiper={setAcitiveThumb}
            loop={true}
            direction="vertical"
            slidesPerView={4}
            // spaceBetween={50}
            modules={[Navigation, Thumbs]}
          >
            {plant?.map((plant, i) => (
              <SwiperSlide key={i}>
                <Plant className="plant-product-wrapper" plant={plant} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/*  화분 리스트*/}
          <Swiper
            className="plant-product-thumbs"
            onSwiper={setAcitiveThumb02}
            loop={true}
            direction="vertical"
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
          >
            {flowerpot?.map((flowerpot, i) => (
              <SwiperSlide key={i}>
                <Flowerpot
                  className="plant-product-wrapper"
                  flowerpot={flowerpot}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 두번째 product container slide */}

      <div className="products-container-02">
        <div className="container-02-box products-heading">
          <h2 className="products-h2">Best Seller Products</h2>
          <p className="products-p">이 달의 베스트 상품을 만나보세요.</p>
        </div>
        {slideBanner?.map((slideBanner, i) => (
          <PlantDetail
            className="product-wrapper-02"
            key={i}
            slideBanner={slideBanner}
          />
        ))}
      </div>
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

  // 모든 종류를 한번에 볼 수 있는 슬라이드 배너
  const slideBannerQuery = '*[_type == "slideBanner"]';
  const slideBanner = await client.fetch(slideBannerQuery);

  return {
    props: {
      plant,
      flowerpot,
      bannerData,
      customplant,
      customFlowerpot,
      slideBanner,
    },
  };
};

export default Home;
