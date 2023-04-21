import { useState } from 'react';
import { themeServices } from '../../services';
import { THEME } from '../../constants/THEME.enum';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function SwitchTheme() {
  const theme = themeServices().getTheme();

  const [isLight, setIsLight] = useState<boolean>(theme === THEME.LIGHT);

  function toggleSwitch() {
    if (isLight) {
      setIsLight(false);
    } else {
      setIsLight(true);
    }
  }

  const containerClass = clsx('w-[100px] h-[35px] items-center  bg-white/20 flex px-4 rounded-sm', {
    'justify-start': isLight,
    'justify-end': !isLight,
  });

  return (
    <div className={containerClass} onClick={toggleSwitch}>
      <motion.div
        className="cursor-pointer rounded-sm w-[40px] h-[25px] bg-primaryColor"
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
}
