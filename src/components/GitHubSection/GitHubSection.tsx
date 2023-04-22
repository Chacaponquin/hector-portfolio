import { Folder, GitHub, Share } from '../../modules/icon/components';
import { ExternalLink, SectionContainer, SectionHeader } from '../../modules/app/components';
import { Fragment } from 'react';
import { useGithubSection } from './hooks';
import { useLanguage } from '../../modules/language/hooks';

export default function GitHubSection() {
  const { REPOSITORIES } = useGithubSection();
  const { TITLE_SECTION } = useLanguage({ TITLE_SECTION: { en: 'Github Repositories', es: 'Repositorios' } });

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader icon={GitHub} title={TITLE_SECTION} />

        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  gap-y-5 gap-x-5 w-full">
          {REPOSITORIES.map((r, i) => (
            <div
              key={i}
              className="flex transition-all duration-300 hover:scale-105 flex-col py-5 px-10 w-full rounded-sm dark:bg-secondDarkColor h-max dark:border-none border-regular border-lightSlate"
            >
              <div className="flex items-center stroke-primaryColor w-full justify-between mb-3">
                <Folder size={30} />

                <ExternalLink link={r.url} className="dark:stroke-white stroke-black">
                  <Share size={20} />
                </ExternalLink>
              </div>

              <div>
                <h1 className="font-fontBold text-2xl mb-1">{r.title}</h1>
              </div>

              <div>
                <p className="dark:text-lightSlate text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores eveniet ullam perferendis
                  illum fugit harum dolore? Voluptas, praesentium ipsum?
                </p>
              </div>

              <div className="flex gap-x-2 flex-wrap gap-y-1 text-sm mt-4">
                {r.madeWith.map((s, j) => (
                  <div
                    key={j}
                    className="bg-black/20 darK:bg-white/20 py-1 px-2 dark:text-white text-black font-fontCode rounded-sm"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
