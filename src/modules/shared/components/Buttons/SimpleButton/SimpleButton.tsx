import { useState } from 'react';
import { ArrowRight } from '../../../../icon/components';

interface ButtonProps {
  text: string;
}

export default function SimpleButton({ text }: ButtonProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="py-2.5 esm:py-2 esm:text-lg esm:px-6 flex gap-x-2 px-8 border-2 border-primaryColor text-primaryColor transition-all duration-300 text-xl hover:text-white hover:bg-primaryColor hover:brightness-125 hover:stroke-white font-fontCode rounded-sm w-max stroke-primaryColor items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className="font-fontCode">{text}</p>
      <div className="transition-all duration-200" style={{ transform: `translateX(${isHover ? 10 : 0}px)` }}>
        <ArrowRight size={20} />
      </div>
    </button>
  );
}
