"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Rocket = ({
  animationData,
  ...rest
}: {
  animationData: string;
  [key: string]: any;
}) => {
  const animationContainer = useRef(null);
  const classes = (rest.className ?? "") + " rotate-6";

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

  return <div ref={animationContainer} {...rest} className={classes} />;
};

export { Rocket };
