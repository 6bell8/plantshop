import { React, useState } from "react";
import Link from "next/link";
import { client } from "../lib/client";
import {
  Plant,
  Flowerpot,
  FooterBanner,
  HeroBanner,
  PlantDetail,
  ProductCustom,
  ProductCustom02,
} from "../components";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/thumbs/thumbs.min.css";
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Autoplay, Pagination]);

// const settings = {
//   spaceBetween: 20,
//   direction: "vertical",
//   scrollbar: { draggable: true, el: null },
//   slidesPerView: 4,
//   loop: true,
// };

const Home = ({
  plant,
  flowerpot,
  bannerData,
  customplant,
  customFlowerpot,
  productBanner,
}) => {
  const [activeThumb, setAcitiveThumb] = useState(null);
  const [activeThumb02, setAcitiveThumb02] = useState(null);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2 className="">
          Custom <br />
          your plant!
        </h2>
        <p>마음에 드는 식물이나 화분을 클릭하면 주문 화면으로 이동됩니다.</p>
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
            {customplant?.map((customplant) => (
              <SwiperSlide>
                <ProductCustom
                  key={customplant._id}
                  customplant={customplant}
                />
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
            {customFlowerpot?.map((customFlowerpot) => (
              <SwiperSlide>
                <ProductCustom02
                  key={customFlowerpot._id}
                  customFlowerpot={customFlowerpot}
                />
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
            {plant?.map((plant, index) => (
              <SwiperSlide>
                <Plant
                  className="plant-product-wrapper"
                  key={index}
                  plant={plant}
                />
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
            {flowerpot?.map((flowerpot, index) => (
              <SwiperSlide>
                <Flowerpot
                  className="plant-product-wrapper"
                  key={index}
                  flowerpot={flowerpot}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 두번째 product container slide */}

      <div className="products-container-02">
        {productBanner?.map((productBanner, index) => (
          <PlantDetail
            className="product-wrapper-02"
            key={index}
            productBanner={productBanner}
          />
        ))}
      </div>

      {/* <FooterBanner  /> */}
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

  // 모든 종류를 한번에 볼 수 있도록 슬라이드 배너
  const productBannerQuery = '*[_type == "slideBanner"]';
  const productBanner = await client.fetch(productBannerQuery);

  return {
    props: {
      plant,
      flowerpot,
      bannerData,
      customplant,
      customFlowerpot,
      productBanner,
    },
  };
};

export default Home;
