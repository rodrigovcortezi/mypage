"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Rocket = ({ animationData }: { animationData: string }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (!animationContainer.current) {
      return;
    }

    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationData,
    });

    return () => anim.destroy();
  }, [animationData]);

  return <div ref={animationContainer} className="w-[500px] rotate-6" />;
};

export { Rocket };
