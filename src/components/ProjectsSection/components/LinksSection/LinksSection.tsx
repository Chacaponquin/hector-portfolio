import { ExternalLink } from '../../../../modules/app/components';
import { GitHub, Share } from '../../../../modules/icon/components';

export default function LinksSection({ externalLink, githubLink }: { githubLink: string; externalLink: string }) {
  return (
    <div className="flex w-full justify-end gap-x-6 mt-2">
      <ExternalLink
        link={githubLink}
        className="dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor"
      >
        <GitHub size={22} />
      </ExternalLink>
      <ExternalLink
        link={externalLink}
        className="dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor"
      >
        <Share size={22} />
      </ExternalLink>
    </div>
  );
}
