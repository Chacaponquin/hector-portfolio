import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES';
import { Project } from '../interfaces/project.interface';

export function useProjectSection() {
  const PROJECTS: Array<Project> = [
    { title: 'Chaca', image: APP_IMAGES.TEST_IMAGE, madeWith: ['Typescript', 'React'] },
    { title: 'Chaca', image: APP_IMAGES.TEST_IMAGE, madeWith: ['Typescript', 'React'] },
    { title: 'Chaca', image: APP_IMAGES.TEST_IMAGE, madeWith: ['Typescript', 'React'] },
  ];

  return { PROJECTS };
}
