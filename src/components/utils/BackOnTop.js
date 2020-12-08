import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackOnTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={goToTop}
      style={{
        height: 40,
        width: 40,
        display: showScroll ? "flex" : "none",
        color: "red",
      }}
    />
  );
};

export default BackOnTop;
