// useIntersectionObserver.js
import { useEffect, useState, useRef } from "react";

function useIntersectionObserver(threshold = 0.5) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      const isHalfwayVisible = entries[0].isIntersecting;
      setIsIntersecting(isHalfwayVisible);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  return { targetRef, isIntersecting };
}

export default useIntersectionObserver;
