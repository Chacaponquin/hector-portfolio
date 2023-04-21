import { useAnimation } from 'framer-motion';
import { Footer, GitHubSection, InitialLoader, Presentation, ProjectsSection, SkillsSection } from './components';

function App() {
  const textAnimate = useAnimation();
  const modalAnimate = useAnimation();
  const blockAnimate = useAnimation();
  const navBarAnimate = useAnimation();
  const principalTextAnimate = useAnimation();
  const meImageAnimation = useAnimation();

  const initialShowText = () => {
    textAnimate.start({ translateY: 0 });
  };

  const initialAnimation = () => {
    textAnimate.start({ translateY: -200 }).then(() => {
      textAnimate.start({ display: 'none' }).then(() => {
        blockAnimate
          .start({ display: 'none' })
          .then(() => modalAnimate.start({ height: '0px' }))
          .then(() => navBarAnimate.start({ translateY: 0 }))
          .then(() => principalTextAnimate.start({ translateY: 0 }))
          .then(() => meImageAnimation.start({ translateX: 0 }));
      });
    });
  };

  return (
    <div className="dark:text-white dark:bg-primaryDarkColor text-black transition-all duration-300">
      <InitialLoader
        blockAnimate={blockAnimate}
        initialAnimation={initialAnimation}
        initialShowText={initialShowText}
        modalAnimate={modalAnimate}
        textAnimate={textAnimate}
      />
      <Presentation
        principalTextAnimate={principalTextAnimate}
        navBarAnimate={navBarAnimate}
        meImageAnimation={meImageAnimation}
      />
      <GitHubSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
