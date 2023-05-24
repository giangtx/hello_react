import React, { useEffect, useState, useRef } from "react";

const Test = () => {
  const [count, setCount] = useState(1);
  const giangRefs = useRef([]);

  useEffect(() => {
    window.onscroll = function () {
      giangRefs.current.forEach((item, index) => {
        if (checkVisible(item)) {
          setCount(index + 1);
        }
      });
    };
  }, []);

  const checkVisible = (elm) => {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  };

  const scrollTo = (value) => {
    const position = count + value - 1;
    if (position < 0 || position >= giangRefs.current.length) {
      return;
    }
    giangRefs.current[position].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="wrapper">
        <div className="giang" ref={(el) => (giangRefs.current[0] = el)}>
          Ba cong di cho troi mua
        </div>
        <div className="giang" ref={(el) => (giangRefs.current[1] = el)}>
          Cai tom cai tep di dua ba cong
        </div>
        <div className="giang" ref={(el) => (giangRefs.current[2] = el)}>
          Dua ba den ngo dua xa
        </div>
        <div className="giang" ref={(el) => (giangRefs.current[3] = el)}>
          Dua ba ve tan ngo trong nha ba
        </div>
      </div>
      <div id="giangcount">
        <div className="test-btn" onClick={() => scrollTo(-1)}>
          prev
        </div>
        page: {count}
        <div className="test-btn" onClick={() => scrollTo(1)}>
          next
        </div>
      </div>
    </div>
  );
};

export default Test;
