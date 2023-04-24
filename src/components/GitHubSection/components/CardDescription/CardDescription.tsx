import { Fragment } from 'react';

export default function CardDescription({ title }: { title: string }) {
  return (
    <Fragment>
      <div>
        <h1 className="font-fontBold text-2xl mb-1">{title}</h1>
      </div>

      <div>
        <p className="dark:text-lightSlate text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores eveniet ullam perferendis illum fugit
          harum dolore? Voluptas, praesentium ipsum?
        </p>
      </div>
    </Fragment>
  );
}
