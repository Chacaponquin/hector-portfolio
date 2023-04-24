import { ExternalLink } from '../../modules/app/components';
import { Copyright } from '../../modules/icon/components';
import { SOCIAL_MEDIA } from '../../modules/shared/constants/SOCIAL_MEDIA';

export default function Footer() {
  return (
    <footer className="w-full bg-secondDarkColor py-10 justify-center flex px-8">
      <div className="text-white max-w-[1000px] w-full flex items-center stroke-white md:flex-row flex-col-reverse gap-y-5 justify-between">
        <div className="flex justify-center w-max">
          <div className="flex items-center text-xl gap-x-2 fill-white text-center esm:text-lg">
            <p>Handcrafted by me</p> <Copyright size={28} /> <p>Chacaponquin</p>
          </div>
        </div>

        <div className="flex items-center gap-x-10">
          {SOCIAL_MEDIA.map((s, i) => (
            <ExternalLink
              key={i}
              link={s.link}
              className="hover:stroke-secondColor dark:hover:stroke-primaryColor stroke-white fill-transparent transition-all duratin-300"
            >
              {s.icon({ size: 30 })}
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
