import { React, useState } from "react";
import { useRouter } from "next/router";

const Roulette = ({ data }) => {
  const router = useRouter();
  const [carry, setCarry] = useState(false);
  const [page, setPage] = useState("");

  const getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 50);

    if (number <= 10) {
      setCarry(true);
      setPage("홈");
      setTimeout(() => {
        router.push("/");
        data();
      }, 1000);
    } else if (number <= 20) {
      setCarry(true);
      setPage("거래내역");
      setTimeout(() => {
        router.push("/ecommerce");
        data();
      }, 1000);
    } else if (number <= 30) {
      setCarry(true);
      setPage("주문내역");
      setTimeout(() => {
        router.push("/orders");
        data();
      }, 1000);
    } else if (number <= 40) {
      setCarry(true);
      setPage("게시판");
      setTimeout(() => {
        router.push("/board");
        data();
      }, 1000);
    } else if (number <= 50) {
      setCarry(true);
      setPage("게시판 작성");
      setTimeout(() => {
        router.push("/board/empcreate");
        data();
      }, 1000);
    }
  };

  return (
    <div className="random-wrapper">
      <div className="random-box">
        <h1 className="random-title">Random page move</h1>

        {carry ? (
          <p className="carry-title">
            <span>{page}</span>으로 이동 중입니다.
          </p>
        ) : (
          <p className="carry-title">클릭 시 랜덤 페이지로 이동됩니다.</p>
        )}
        <button className="random-btn" onClick={getRandomNumber}>
          Click me
        </button>
      </div>
      {/* {carry ? (
        <p className="random-carry">{`${carry}페이지로 이동됩니다.`}</p>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Roulette;
