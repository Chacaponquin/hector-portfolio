import React from 'react';
import { Skill } from '../../interfaces/skill.interface';

export default function SkillCard({ title }: Skill) {
  return (
    <div className="flex flex-col border-2  border-primaryColor w-[400px]">
      <div className="text-center text-white bg-primaryColor text-2xl font-fontCodeBold py-4">{title}</div>
    </div>
  );
}
