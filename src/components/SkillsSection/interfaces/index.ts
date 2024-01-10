import React from 'react'
import { IconProps } from '../../../modules/icon/interfaces'

export interface Skill {
  title: string
  skills: Array<Tech>
  icon: React.FC<IconProps>
}

export interface Tech {
  tech: string
  image: { image: string; alt: string }
}
