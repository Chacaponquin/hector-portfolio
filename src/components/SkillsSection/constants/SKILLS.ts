import { Backend, CodeLanguages, Frontend } from '../../../modules/icon/components';
import { Skill } from '../interfaces/skill.interface';

export const SKILLS: Array<Skill> = [
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'HTML', 'CSS', 'Next', 'Tailwind CSS'],
    icon: Frontend({ size: 25 }),
  },
  { title: 'Backend', skills: ['Nest', 'Express', 'MongoDB', 'GraphQL'], icon: Backend({ size: 25 }) },
  { title: 'Languages', skills: ['Typescript', 'Javascript', 'Python', 'Git'], icon: CodeLanguages({ size: 25 }) },
];
