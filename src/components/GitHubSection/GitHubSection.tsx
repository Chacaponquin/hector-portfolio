import { GitHub } from '../../modules/icon/components';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { useGithubSection } from './hooks';
import { useTranslation } from '../../modules/language/hooks';
import { CardDescription, CardHeader, CardMadeWith } from './components';

export default function GitHubSection() {
  const { REPOSITORIES } = useGithubSection();
  const { TITLE_SECTION } = useTranslation({ TITLE_SECTION: { en: 'Github Repositories', es: 'Repositorios' } });

  return (
    <SectionContainer>
      <SectionHeader icon={GitHub} title={TITLE_SECTION} />

      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  gap-y-5 gap-x-5 w-full">
        {REPOSITORIES.map((r, i) => (
          <div
            key={i}
            className="flex transition-all duration-300 hover:scale-105 flex-col py-5 px-10 w-full rounded-sm dark:bg-secondDarkColor h-max dark:border-none border-regular border-lightSlate"
          >
            <CardHeader url={r.url} />
            <CardDescription title={r.title} description={r.description} />
            <CardMadeWith madeWith={r.madeWith} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
