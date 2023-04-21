import React from 'react';
import { SectionContainer } from '../../modules/app/components';
import { Code, GitHub } from '../../modules/icon/components';
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

        <div className="flex w-full justify-between mt-8 h-max">
          {SKILLS.map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
