import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { Code } from '../../modules/icon/components';
import { Fragment } from 'react';
import { SKILLS } from './constants/SKILLS';
import { SkillCard } from './components';

export default function SkillsSection() {
  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader title="My Skills" icon={Code} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 justify-between mt-8 h-max gap-y-6">
          {SKILLS.map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
