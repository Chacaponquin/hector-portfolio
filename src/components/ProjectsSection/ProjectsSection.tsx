import { Fragment } from 'react';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { useProjectSection } from './hooks';
import { DescriptionSection, ImageSection, LinksSection, MadeWithSection } from './components';
import { SourceCode } from '../../modules/icon/components';

export default function ProjectsSection() {
  const { PROJECTS } = useProjectSection();

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader title="Projects" icon={SourceCode} />

        <div className="flex flex-wrap w-full gap-x-14 justify-between gap-y-7">
          {PROJECTS.map((p, i) => (
            <div key={i} className="flex flex-col rounded-sm  max-w-[450px]">
              <ImageSection image={p.image.image} alt={p.image.alt} />

              <div className="flex flex-col py-4 px-7 gap-y-3 dark:bg-secondDarkColor ">
                <DescriptionSection description={p.description} />
                <MadeWithSection madeWith={p.madeWith} />
                <LinksSection externalLink={p.externalLink} githubLink={p.githubLink} />
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
