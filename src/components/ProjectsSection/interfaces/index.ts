import { AppImage } from '../../../modules/app/interfaces/image'

export interface Project {
  title: string
  image: AppImage
  madeWith: Array<string>
  githubLink: string
  externalLink: string
  description: string
}
