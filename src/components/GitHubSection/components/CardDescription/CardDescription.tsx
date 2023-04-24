import { Fragment } from 'react';

export default function CardDescription({ title, description }: { title: string; description: string }) {
  return (
    <Fragment>
      <div>
        <h1 className="font-fontBold text-2xl mb-1">{title}</h1>
      </div>

      <div>
        <p className="dark:text-lightSlate text-base">{description}</p>
      </div>
    </Fragment>
  );
}
