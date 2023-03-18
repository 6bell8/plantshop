import React from "react";
import { client, urlFor } from "../../lib/client";

// 라우팅할 때 저장 폴더에 따라서 slug가 뒤바뀜(주의) 따라서 지정하는 폴더명을 변수 or 함수명과 일치시켜야된다.

const ProductDesc = ({ plant, plants }) => {
  const { image, name, detail, price } = plant;
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

// 해당 type slideBanner로 바꾸기
export const getStaticPaths = async () => {
  const query = `*[_type == "plant"] {
      slug {
        current
      }
    }
    `;

  const plants = await client.fetch(query);

  const paths = plants.map((plant) => ({
    params: {
      slug: plant.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "plant" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "plant"]';

  const plant = await client.fetch(query);
  const plants = await client.fetch(productsQuery);


  return {
    props: { plants, plant },
  };
};

export default ProductDesc;
