import { useAnimation } from 'framer-motion';
import { GitHubSection, InitialLoader, Presentation } from './components';

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
		<div className="text-white bg-darkColor">
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
		</div>
	);
}

export default App;
