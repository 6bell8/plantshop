import React from "react";
import { client, urlFor } from "../../lib/client";

const ProductDesc = ({ slideBanner, slideBanners }) => {
  const { image, name, detail, price } = slideBanner;
  return (
    <div>
      <div className="pordict-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
      </div>
    </div>
  );
};

// 해당 getServerSideProps까지도 type name을 통일해주어야 라우팅이 제대로 설정이 됨
// paths로 slideBanner마다 slug명으로 params 설정
export const getStaticPaths = async () => {
  const query = `*[_type == "slideBanner"] {
      slug {
        current
      }
    }
    `;

  // 상단 client에 있는 정보로 fetch해서 slideBanner를 경로지정
  const slideBanners = await client.fetch(query);

  //slideBanner에 있는 경로를 slug명으로 매핑해서 리턴
  const paths = slideBanners.map((slideBanner) => ({
    params: {
      slug: slideBanner.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// 정적 렌더링 params는 slug명으로 내려줌, params를 slug 인자 값으로 전달
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "slideBanner" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "slideBanner"]';

  // 마찬가지로 slideBanner 받아와서 props로 내려주는 과정
  const slideBanner = await client.fetch(query);
  const slideBanners = await client.fetch(productsQuery);

  console.log(slideBanner);

  return {
    props: { slideBanners, slideBanner },
  };
};

export default ProductDesc;
