import { Skill } from '../../interfaces/skill.interface';
import { ArrowRight } from '../../../../modules/icon/components';

export default function SkillCard({ title, skills, icon }: Skill) {
  return (
    <div className="flex h-full flex-col w-full rounded-sm transition-all duration-300 hover:-translate-y-3">
      <div className="text-center text-white bg-secondColor dark:bg-primaryColor text-2xl py-4 stroke-white flex items-center justify-center gap-x-7">
        {icon}
        <h1 className="font-fontCodeBold">{title}</h1>
      </div>

      <div className="flex flex-col w-full p-7 dark:bg-secondDarkColor dark:text-white text-xl gap-y-3 h-full dark:stroke-white stroke-black dark:border-r-0 border-r-[2px] border-lightSlate dark:border-none border-l-[2px] border-b-[2px]">
        {skills.map((s, i) => (
          <div key={i} className="flex gap-x-4 items-center">
            <ArrowRight size={20} />
            <p className="mb-0">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
