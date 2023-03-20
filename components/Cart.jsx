// dom제어  useRef
import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading"> 나의 장바구니</span>
          <span className="cart-num-items">{totalQuantities} 상품</span>
        </button>
        {/* 조건식 바로 부여 */}
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping width={150} height={150} />
            <h3>장바구니가 텅 비었어요.</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                계속 쇼핑하시겠습니까?
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                  alt=""
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}원</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        {/* useContext에서의 함수를 onclick에 걸어놓기 */}
                        <span className="minus" onClick="">
                          <AiOutlineMinus />
                        </span>
                        <span className="num" onClick="">
                          0
                        </span>
                        <span className="plus" onClick="">
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button type="button" className="remove-item">
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>총 금액:</h3>
                <h3>{totalPrice}원</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" onClick="">
                  결제하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
