import { Fragment } from 'react';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { useProjectSection } from './hooks';
import { DescriptionSection, ImageSection, LinksSection, MadeWithSection } from './components';
import { SourceCode } from '../../modules/icon/components';
import { useLanguage } from '../../modules/language/hooks';

export default function ProjectsSection() {
  const { PROJECTS } = useProjectSection();
  const { TITLE_SECTION } = useLanguage({ TITLE_SECTION: { en: 'Projects', es: 'Proyectos' } });

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader title={TITLE_SECTION} icon={SourceCode} />

        <div className="flex flex-wrap w-full gap-x-14 justify-between gap-y-7 ">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="flex flex-col rounded-sm w-full xl:max-w-[450px] dark:border-none border-regular border-lightSlate transition-all duration-300 hover:-translate-y-3"
            >
              <ImageSection image={p.image.image} alt={p.image.alt} />

              <div className="flex flex-col py-4 px-7 dark:bg-secondDarkColor ">
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
