import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(15);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const tick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return count;
}

export default Counter;
