import React from 'react';
import { GitHub, Linkedin, Twitter } from '../../icon/components';
import { IconProps } from '../../icon/interfaces/IconProps.interface';

interface SocialMedia {
  name: string;
  icon: React.FC<IconProps>;
  link: string;
}

export const SOCIAL_MEDIA: Array<SocialMedia> = [
  {
    name: 'Github',
    icon: GitHub,
    link: 'https://github.com/Chacaponquin',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    link: 'https://twitter.com/chacaponquin01',
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/h%C3%A9ctor-g%C3%B3mez-robaina-89aaa5221',
  },
];
