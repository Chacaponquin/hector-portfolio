// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion';
import { SwitchTheme } from '../../../../../../modules/theme/components';

interface Props {
  navBarAnimate: AnimationControls;
}

export default function Theme({ navBarAnimate }: Props) {
  return (
    <motion.div
      initial={{ translateY: '400px' }}
      transition={{ duration: 0.5 }}
      animate={navBarAnimate}
      className="exsm:hidden"
    >
      <SwitchTheme />
    </motion.div>
  );
}
