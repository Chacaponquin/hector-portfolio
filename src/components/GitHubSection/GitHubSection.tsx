import { appServices } from '../../modules/app/services';
import { GitHub } from '../../modules/icon/components';
import { Loader } from '../../modules/shared/components';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { Fragment } from 'react';

export default function GitHubSection() {
  const { repositories, isLoading } = appServices().getGitHubRepositories();

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader icon={GitHub} title="Github Repositories" />

        <div>
          {true ? (
            <Loader className="pt-24 flex justify-center w-full" size={100} />
          ) : (
            <div className="flex flex-col">{}</div>
          )}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
