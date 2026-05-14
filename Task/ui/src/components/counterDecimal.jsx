import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CounterDecimal = ({ target }) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

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
  }, [target, inView]);

  return <span ref={ref}>{count}</span>;
};

export default CounterDecimal;