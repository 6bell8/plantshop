import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faqData } from "../../data/dummy";

const faq = () => {
  const [selected, setSelected] = useState(0);

  // accordian 함수
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faq-container">
      <div className="page-title-box">
        <h1 className="page-title">자주 묻는 질문</h1>
        <p className="page-subtitle">info</p>
      </div>

      {/* FAQ */}
      <div className="faq-wrapper">
        <div className="faq-accordion">
          {/* 함수는 {}지만 xml 에서는 () 괄호를 치기 주의*/}
          {faqData.map((item, i) => (
            <div className="item">
              <div className="faq-title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                {selected === i ? (
                  <AiOutlineMinus fontSize={24} />
                ) : (
                  <AiOutlinePlus fontSize={24} />
                )}
              </div>
              <div className={`content ${selected === i ? "show" : ""}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default faq;
