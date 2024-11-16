import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from 'framer-motion';

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax w-full overflow-hidden my-5 ">
      <motion.div className="scroller text-7xl font-bold inline-block whitespace-nowrap" style={{ x }}>
        <span className="inline-block mr-6 ">apple </span>
        <span className="inline-block mr-6 text-red-600">Microsoft </span>
        <span className="inline-block mr-6">Amazon </span>
        <span className="inline-block mr-6">Google </span>
        <span className="inline-block mr-6">Facebook </span>
        <span className="inline-block mr-6">NVIDIA </span>
        <span className="inline-block mr-6">Tesla </span>
        <span className="inline-block mr-6">Samsung </span>
        <span className="inline-block mr-6">Tencent </span>
        <span className="inline-block mr-6">Oracle </span>
        <span className="inline-block mr-6">Netflix </span>
        <span className="inline-block mr-6">Oracle </span>
        <span className="inline-block mr-6">apple </span>
        <span className="inline-block mr-6">Microsoft </span>
        <span className="inline-block mr-6">Amazon </span>
        <span className="inline-block mr-6">Google </span>
        <span className="inline-block mr-6">Facebook </span>
        <span className="inline-block mr-6">NVIDIA </span>
        <span className="inline-block mr-6">Tesla </span>
        <span className="inline-block mr-6">Samsung </span>
        <span className="inline-block mr-6">Tencent </span>
        <span className="inline-block mr-6">Oracle </span>
        <span className="inline-block mr-6">NVIDIA </span>
      </motion.div>
    </div>
  );
};

const Scroller = () => {
  return (
    <section className="py-10  mb-7">
      <ParallaxText baseVelocity={-2}></ParallaxText>
      {/* <ParallaxText baseVelocity={2}></ParallaxText> */}
    </section>
  );
};

export default Scroller;
