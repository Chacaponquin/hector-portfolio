import { motion, AnimationControls } from 'framer-motion';
import { SOCIAL_MEDIA } from '../../modules/app/constants/SocialMedia';
import { SimpleButton } from '../../modules/shared/components/Buttons';

export default function Presentation({
	navBarAnimate,
	principalTextAnimate,
}: {
	navBarAnimate: AnimationControls;
	principalTextAnimate: AnimationControls;
}) {
	return (
		<div className="flex w-scrren h-screen justify-center px-10 items-center">
			<div className="w-full max-w-[1000px] h-full flex flex-col justify-center">
				<div className="flex justify-end text-xl absolute w-[1000px] top-0 gap-x-14 text-primaryColor py-5">
					{SOCIAL_MEDIA.map((el, i) => (
						<div key={i} className="h-max overflow-y-hidden">
							<motion.div
								animate={navBarAnimate}
								className="flex flex-col items-start h-max"
								initial={{ translateY: '100%' }}
								transition={{ duration: 0.5 }}
							>
								<h1 className="font-fontBlack font-fontCode">{el.name}</h1>
							</motion.div>
						</div>
					))}
				</div>

				<div className="h-max">
					<motion.div
						className="flex flex-col max-w-[600px] gap-y-2"
						transition={{ duration: 0.8 }}
						animate={principalTextAnimate}
						initial={{ translateY: '100%' }}
					>
						<p className="font-fontCode text-2xl text-primaryColor">Hi, I'm</p>
						<h1 className="font-fontTitle text-8xl">Héctor Gómez</h1>
						<p className="text-xl mb-4">
							Soy un ingeniero de software y{' '}
							<p className="inline font-fontCode text-primaryColor">
								desarrollador fullstack
							</p>{' '}
							dedicado principalmente al desarrollo de apliaciones web de gran
							utilidad
						</p>

						<SimpleButton text="Contáctame" />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
