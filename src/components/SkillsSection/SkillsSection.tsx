import { SectionContainer } from '../../modules/app/components';
import { Code } from '../../modules/icon/components';
import { Fragment } from 'react';
import { SKILLS } from './constants/SKILLS';
import { SkillCard } from './components';

export default function SkillsSection() {
  return (
    <SectionContainer>
      <Fragment>
        <div className="flex items-center gap-x-10 stroke-primaryColor">
          <Code size={60} />
          <h1 className="font-fontTitle text-4xl">My Skills</h1>
        </div>

        <div className="grid grid-cols-3 justify-between mt-8 h-max">
          {SKILLS.map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
