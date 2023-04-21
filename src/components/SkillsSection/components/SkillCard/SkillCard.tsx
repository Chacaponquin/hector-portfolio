
import { Skill } from '../../interfaces/skill.interface';
import { ArrowRight,  } from '../../../../modules/icon/components';

export default function SkillCard({ title, skills }: Skill) {
  return (
    <div className="flex h-full flex-col border-2  border-primaryColor w-[450px]">
      <div className="text-center text-white bg-primaryColor text-2xl py-4 stroke-white">
       
        <h1 className="font-fontCodeBold">{title}</h1>
      </div>

      <div className="flex flex-col w-full p-7 bg-white text-black text-xl gap-y-3 h-full stroke-black">
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
