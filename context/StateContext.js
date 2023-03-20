import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// createContext 생성 훅
const Context = createContext();

// context는 구성이 죄다 export 하는 걸로 되어있음

//children props 중요 children을 통해서 모든 정보를 하달

// 때문에 useState를 한번에 모아서 export해줌(useState로 동적요소 관리)

//useState 함수
export const StateContext = ({ children }) => {
  //useSa snippet 엄청편함
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  // 동적 상태변경 함수
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = (prevQty) => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      }
      return prevQty - 1;
    });
  };

  //장바구니 담기
  // cartItem의 item과 product(onAdd의 문자열값)의 id값이 같은 것을 찾는다.
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    // usestate 변경
    // 1. 정리 된 함수가 맞다면 다음 함수 실행
    setTotalPrice(
      (prevTotlaPrice) => prevTotlaPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      // 장바구니 항목 업데이트 함수
      // 카트에 담긴 product와 quantity가 같은 경우 수량만 늘린다.
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
      });

      // updatedCartItems 변수만 설정하고 함수 호출을 하지않으면 무효 따라서 setCartItems(useState)에 담아 호출
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      // 장바구니에 물건이 없으면 그대로 스프레드
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`[ ${qty} ] 개 ${product.name} 장바구니에 담았습니다.`);
  };

  //export 내에서 value 값 내에 usestate 다 떄려 넣기
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// 화살표 함수 설정
export const useStateContext = () => useContext(Context);
