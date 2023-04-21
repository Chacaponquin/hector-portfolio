import { AppImage } from '../../../modules/app/interfaces/image.interface';

export interface Project {
  title: string;
  image: AppImage;
  madeWith: Array<string>;
}
