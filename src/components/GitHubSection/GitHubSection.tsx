import { Folder, GitHub } from '../../modules/icon/components';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { Fragment } from 'react';
import { useGithubSection } from './hooks';

export default function GitHubSection() {
  const { REPOSITORIES } = useGithubSection();

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader icon={GitHub} title="Github Repositories" />

        <div className="flex flex-col gap-y-5 w-full">
          {REPOSITORIES.map((r, i) => (
            <div key={i} className="flex py-5 px-14 w-full rounded-sm bg-secondDarkColor">
              <div className="flex items-center stroke-primaryColor">
                <Folder size={30} />
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
