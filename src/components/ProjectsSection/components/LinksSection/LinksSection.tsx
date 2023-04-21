import { ExternalLink } from '../../../../modules/app/components';
import { GitHub, Share } from '../../../../modules/icon/components';

export default function LinksSection({ externalLink, githubLink }: { githubLink: string; externalLink: string }) {
  return (
    <div className="flex w-full justify-end gap-x-6 dark:stroke-white stroke-black">
      <ExternalLink link={githubLink}>
        <GitHub size={22} />
      </ExternalLink>
      <ExternalLink link={externalLink}>
        <Share size={22} />
      </ExternalLink>
    </div>
  );
}
