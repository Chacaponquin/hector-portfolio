import React from 'react';
import { IconProps } from '../../../modules/icon/interfaces';

export interface Skill {
  title: string;
  skills: Array<string>;
  icon: React.ReactElement<IconProps>;
}
