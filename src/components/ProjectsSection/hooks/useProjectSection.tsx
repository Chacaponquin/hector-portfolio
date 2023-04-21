import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES';
import { Project } from '../interfaces/project.interface';

export function useProjectSection() {
  const PROJECTS: Array<Project> = [1, 2, 3].map(() => ({
    title: 'Chaca',
    image: APP_IMAGES.TEST_IMAGE,
    madeWith: ['Typescript', 'React'],
    externalLink: '',
    githubLink: '',
  }));

  return { PROJECTS };
}
