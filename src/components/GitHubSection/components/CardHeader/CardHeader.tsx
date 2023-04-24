import { Folder, Share } from '../../../../modules/icon/components';
import { ExternalLink } from '../../../../modules/app/components';

export default function CardHeader({ url }: { url: string }) {
  return (
    <div className="flex items-center stroke-secondColor  dark:stroke-primaryColor w-full justify-between mb-3">
      <Folder size={30} />

      <ExternalLink link={url} className="dark:stroke-white stroke-black">
        <Share size={20} />
      </ExternalLink>
    </div>
  );
}
