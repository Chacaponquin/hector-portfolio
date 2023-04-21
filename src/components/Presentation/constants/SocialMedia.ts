import React from 'react';
import { GitHub, Linkedin, Twitter } from '../../../modules/icon/components';

interface SocialMedia {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const SOCIAL_MEDIA: Array<SocialMedia> = [
  {
    name: 'Github',
    icon: GitHub({ size: 20 }),
    link: 'https://github.com/Chacaponquin',
  },
  {
    name: 'Twitter',
    icon: Twitter({ size: 20 }),
    link: 'https://twitter.com/chacaponquin01',
  },
  {
    name: 'Linkedin',
    icon: Linkedin({ size: 20 }),
    link: '',
  },
];
