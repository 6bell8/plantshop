import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Plant } from "../../components";
// 1. 전역변수에 대한 해당 컴포넌트 가져오기
import { useStateContext } from "../../context/StateContext";

const ProductDesc = ({ plant, plants }) => {
  const { image, name, details, price } = plant;

  const [index, setIndex] = useState(0);
  // 2. 전역변수 바인딩을 위한 콜백함수 전달
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(plant, qty);
    setShowCart(true);
  };

  useEffect(() => {
    let viewedProduct = localStorage.getItem("watched");
    viewedProduct = JSON.parse(viewedProduct);
    viewedProduct.unshift(plant.name);
    viewedProduct = new Set(viewedProduct);
    viewedProduct = Array.from(viewedProduct);
    localStorage.setItem("watched", JSON.stringify(viewedProduct));
  });

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(20)</p>
          </div>

          <h4>상세정보</h4>
          <p>{details}</p>
          <p className="price">{price}원</p>
          <div className="quantity">
            {/* <h3>수량</h3> */}
            <p className="quantity-desc">
              {/* useContext에서의 함수를 onclick에 걸어놓기 */}
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons">
            {/* 3. onAdd에 배열에서 나타내주는 배열(plant)를 넣어주어야 전역관리함수 사용가능, 파라미터 활용하기 위해 화살표 함수 사용, */}
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(plant, qty)}
            >
              장바구니 추가
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              지금 구매하기
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>관심 가질 만한 상품</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {plants.map((item) => (
              <Plant key={item._id} plant={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 해당 getServerSideProps까지도 type name을 통일해주어야 라우팅이 제대로 설정이 됨
// paths로 plant마다 slug명으로 params 설정
export const getStaticPaths = async () => {
  const query = `*[_type == "plant"] {
      slug {
        current
      }
    }
    `;

  // 상단 client에 있는 정보로 fetch해서 plant를 경로지정
  const plants = await client.fetch(query);

  //plant에 있는 경로를 slug명으로 매핑해서 리턴
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

// 정적 렌더링 params는 slug명으로 내려줌, params를 slug 인자 값으로 전달
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "plant" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "plant"]';

  // 마찬가지로 plant 받아와서 props로 내려주는 과정
  const plant = await client.fetch(query);
  const plants = await client.fetch(productsQuery);

  return {
    props: { plants, plant },
  };
};

export default ProductDesc;
