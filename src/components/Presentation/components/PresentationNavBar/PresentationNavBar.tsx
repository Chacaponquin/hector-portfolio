// eslint-disable-next-line import/named
import { AnimationControls } from 'framer-motion';
import { Logo, SocialMedia, Theme } from './components';
import { Section } from '../../../../modules/shared/components';

interface Props {
  navBarAnimate: AnimationControls;
}

export default function PresentationNavBar({ navBarAnimate }: Props) {
  return (
    <div className="w-full flex justify-center px-8 absolute top-0 left-0">
      <Section>
        <nav className="flex items-center justify-between text-xl py-5 z-[40] overflow-y-hidden w-full">
          <Logo />

          <div className="flex md:gap-x-8 gap-x-5">
            <SocialMedia navBarAnimate={navBarAnimate} />
            <Theme navBarAnimate={navBarAnimate} />
          </div>
        </nav>
      </Section>
    </div>
  );
}
