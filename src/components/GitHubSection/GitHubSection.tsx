import React from 'react';
import { appServices } from '../../modules/app/services';
import { GitHub } from '../../modules/icon/components';
import { Loader } from '../../modules/shared/components';
import { SectionContainer } from '../../modules/app/components';
import { Fragment } from 'react';

export default function GitHubSection() {
  const { repositories, isLoading } = appServices().getGitHubRepositories();

  return (
    <SectionContainer>
      <Fragment>
        <div className="flex items-center gap-x-10 stroke-primaryColor">
          <GitHub size={75} />
          <h1 className="font-fontTitle text-4xl">GitHub Repositories</h1>
        </div>

        <div>
          {true ? (
            <Loader className="py-24 flex justify-center w-full" size={100} />
          ) : (
            <div className="flex flex-col">{}</div>
          )}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
