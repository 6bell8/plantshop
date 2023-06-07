import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/router";

// createContext 생성 훅
const Context = createContext();

// context는 구성이 죄다 export 하는 걸로 되어있음

//children props 중요 children을 통해서 모든 정보를 하달

// 때문에 useState를 한번에 모아서 export해줌(useState로 동적요소 관리)

//useState 함수
export const StateContext = ({ children }) => {
  //useSa snippet 엄청편함

  const router = useRouter();

  const [detailPopup, setDetailPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(router.pathname);
  const [empData, setEmpData] = useState([]);
  const [users, setUsers] = useState(false);
  const [visiter, setVisiter] = useState("방문자");
  const nextId = useRef(31);

  let foundProduct;

  //next에서 페이지 변화 감지 할 때마다 next/router 함수로 변화 시킴, 동적 변화는 context에서 직접 변화

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/6bell8/d9b6225c2adb19dc658b7ab8529ce767/raw/2bdd4aa832f44c878518bc64c51ad31541b54155/board.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    return () => {
      setQty(1);
    };
  }, [router]);

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
    //toast.success(`[ ${qty} ] 개 ${product.name} 장바구니에 담았습니다.`);
    alert(`[ ${qty} ] 개 ${product.name} 장바구니에 담았습니다.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    // index = cartItems.findIndex((product) => product._id === id);
    console.log(foundProduct);

    const newCartItems = cartItems.filter((item) => item._id !== id);
    if (value === "inc") {
      // useState에서 배열 수량을 올리는 올바른 방법

      setCartItems([
        ...newCartItems,
        {
          ...foundProduct,
          quantity: foundProduct.quantity + 1,
        },
      ]);

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);

      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);

        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const handleSave = (e) => {
    // 수정하는 조건식
    if (e.id) {
      setEmpData(
        empData.map((row) =>
          e.id === row.id
            ? {
                id: e.id,
                name: e.name,
                username: e.username,
                qa: e.qa,
                phone: e.phone,
              }
            : row
        )
      );
      swal({
        title: "수정 완료",
        text: "확인 버튼을 눌러 닫아주세요.",
        icon: "success",
        button: "확인",
      });
    }
    // 추가하는 조건식
    else {
      setEmpData((data) =>
        data.concat({
          id: nextId.current,
          name: data.name,
          username: data.username,
          qa: data.qa,
          phone: data.phone,
        })
      );

      swal({
        title: "게시 완료",
        text: "확인 버튼을 눌러 닫아주세요.",
        icon: "success",
        button: "확인",
      });
    }
    nextId.current += 1;

    router.push("/board");
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
  };

  //export Context.Provider 내에서 value 값 내에 usestate 다 떄려 넣기
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        showMenu,
        setShowMenu,
        empData,
        setEmpData,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        nextId,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        selected,
        setSelected,
        handleSave,
        handleEditSubmit,
        detailPopup,
        setDetailPopup,
        users,
        setUsers,
        visiter,
        setVisiter,
      }}
    >
      {/* context api 인자값 */}
      {children}
    </Context.Provider>
  );
};

// 화살표 함수 설정
export const useStateContext = () => useContext(Context);
