import clsx from 'clsx'
import { Skill } from '../../interfaces'
import { Header, Tech } from './components'

export default function SkillCard({ title, skills, icon }: Skill) {
  const CONTENT_CLASS = clsx(
    'grid xl:grid-cols-1 esm:grid-cols-1 grid-cols-2',
    'w-full h-full',
    'p-7',
    'dark:stroke-white stroke-black',
    'dark:border-r-0 border-r-[2px] border-lightSlate dark:border-none border-l-[2px] border-b-[2px]',
    'gap-y-6',
    'dark:text-white text-xl',
    'dark:bg-secondDarkColor',
    'rounded-br rounded-bl',
  )

  return (
    <div className="flex h-full flex-col w-full rounded-sm transition-all duration-300 hover:-translate-y-3">
      <Header icon={icon} title={title} />

      <div className={CONTENT_CLASS}>
        {skills.map((tech, index) => (
          <Tech key={index} alt={tech.image.alt} src={tech.image.image} tech={tech.tech} />
        ))}
      </div>
    </div>
  )
}
