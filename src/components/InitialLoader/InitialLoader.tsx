// eslint-disable-next-line import/named
import { motion, AnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoaderProps {
  initialAnimation: () => void;
  initialShowText: () => void;
  blockAnimate: AnimationControls;
  modalAnimate: AnimationControls;
  textAnimate: AnimationControls;
}

export default function InitialLoader({
  initialAnimation,
  initialShowText,
  blockAnimate,
  modalAnimate,
  textAnimate,
}: LoaderProps) {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    initialShowText();

    const interval = setInterval(() => {
      setCont((prev) => {
        if (prev < 100) return prev + 1;
        else {
          clearInterval(interval);
          initialAnimation();
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={modalAnimate}
      transition={{ duration: 1 }}
      initial={{ height: '100vh' }}
      className="bg-secondDarkColor fixed w-full flex justify-center items-center top-0 left-0 z-50 px-8"
    >
      <motion.div className="flex flex-col text-white 2xl:text-9xl xl:text-8xl text-7xl esm:text-6xl">
        <motion.div
          animate={blockAnimate}
          className="absolute bg-secondDarkColor max-w-[1000px] h-[250px] -translate-y-full z-[60] w-full"
        ></motion.div>

        <motion.div
          initial={{ translateY: 200, display: 'flex' }}
          transition={{ duration: 0.7 }}
          animate={textAnimate}
          className="flex-col max-w-[1000px] h-[250px] items-center justify-center w-full"
        >
          <h1 className="font-fontTitle">Héctor Gómez</h1>
        </motion.div>

        <motion.div
          animate={blockAnimate}
          className="absolute bg-primary w-[1000px] h-[250px] translate-y-full z-[60]"
        ></motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-10">
        <h1 className="text-white font-fontTitle text-5xl">{cont}</h1>
      </div>
    </motion.div>
  );
}
