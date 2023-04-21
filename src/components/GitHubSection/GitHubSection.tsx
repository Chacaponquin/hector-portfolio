import React from 'react';
import { appServices } from '../../modules/app/services';
import { GitHub } from '../../modules/icon/components';

export default function GitHubSection() {
  const { repositories } = appServices().getGitHubRepositories();

  return (
    <div className="w-full bg-darkColor flex justify-center">
      <div className="max-w-[1000px] w-full flex flex-col">
        <div className="flex items-center gap-x-10 stroke-primaryColor">
          <GitHub size={75} />
          <h1 className="font-fontTitle text-4xl">GitHub Repositories</h1>
        </div>

        <div>
          <div className="flex flex-col">{}</div>
        </div>
      </div>
    </div>
  );
}
