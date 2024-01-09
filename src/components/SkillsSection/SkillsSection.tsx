import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { Code } from '../../modules/icon/components';
import { SKILLS } from './constants/SKILLS';
import { SkillCard } from './components';
import { useTranslation } from '../../modules/language/hooks';

export default function SkillsSection() {
  const { TITLE_SECTION } = useTranslation({ TITLE_SECTION: { en: 'Skills', es: 'Tecnologías' } });

  return (
    <SectionContainer>
      <SectionHeader title={TITLE_SECTION} icon={Code} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 justify-between mt-8 h-max gap-y-6">
        {SKILLS.map((s, i) => (
          <SkillCard key={i} {...s} />
        ))}
      </div>
    </SectionContainer>
  );
}
