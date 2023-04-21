import { THEME } from '../../constants/THEME.enum';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Dark, Light } from '../../../icon/components';
import { useThemeServices } from '../../services';

export default function SwitchTheme() {
  const { isLight, changeTheme } = useThemeServices();

  function toggleSwitch() {
    if (isLight) {
      changeTheme(THEME.DARK);
    } else {
      changeTheme(THEME.LIGHT);
    }
  }

  const containerClass = clsx('w-[100px] h-[35px] items-center  bg-white/20 flex px-4 rounded-sm', {
    'justify-start': isLight,
    'justify-end': !isLight,
  });

  const cubicClass = clsx('cursor-pointer rounded-sm w-[40px] h-[25px] flex justify-center items-center', {
    'bg-primaryColor stroke-black': isLight,
    'bg-primaryDarkColor stroke-white': !isLight,
  });

  return (
    <div className={containerClass} onClick={toggleSwitch}>
      <motion.div
        className={cubicClass}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        {isLight ? <Light size={16} /> : <Dark size={16} />}
      </motion.div>
    </div>
  );
}
