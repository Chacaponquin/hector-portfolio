import { Folder, GitHub, Share } from '../../modules/icon/components';
import { ExternalLink, SectionContainer, SectionHeader } from '../../modules/app/components';
import { Fragment } from 'react';
import { useGithubSection } from './hooks';

export default function GitHubSection() {
  const { REPOSITORIES } = useGithubSection();

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader icon={GitHub} title="Github Repositories" />

        <div className="grid grid-cols-3 gap-y-5 gap-x-5 w-full">
          {REPOSITORIES.map((r, i) => (
            <div key={i} className="flex flex-col py-5 px-10 w-full rounded-sm bg-secondDarkColor h-max">
              <div className="flex items-center stroke-primaryColor w-full justify-between mb-3">
                <Folder size={30} />

                <ExternalLink link={r.url} className="stroke-white">
                  <Share size={20} />
                </ExternalLink>
              </div>

              <div>
                <h1 className="font-fontBold text-xl mb-1">{r.title}</h1>
              </div>

              <div>
                <p className="text-justify text-lightSlate text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores eveniet ullam perferendis
                  illum fugit harum dolore? Voluptas, praesentium ipsum?
                </p>
              </div>

              <div className="flex gap-x-2 flex-wrap gap-y-1 text-sm mt-2">
                {r.madeWith.map((s, j) => (
                  <div key={j} className="bg-white/20 py-1 px-2 text-white font-fontCode rounded-sm">
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
