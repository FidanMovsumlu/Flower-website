import React, { useEffect, useState } from "react";

const CounterDecimal = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start.toFixed(1));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

export default CounterDecimal;
