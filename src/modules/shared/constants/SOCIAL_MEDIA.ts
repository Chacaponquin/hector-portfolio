import React from 'react'
import { GitHub, Linkedin, Mail, Twitter } from '../../icon/components'
import { IconProps } from '../../icon/interfaces'

interface SocialMedia {
  name: string
  icon: React.FC<IconProps>
  link: string
}

export const EMAIL_URL = 'mailto:hectorangel2001@gmail.com'
export const TWITTER_URL = 'https://x.com/hgomezrobaina'
export const GITHUB_URL = 'https://github.com/Chacaponquin'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/h%C3%A9ctor-g%C3%B3mez-robaina-89aaa5221'

export const SOCIAL_MEDIA: Array<SocialMedia> = [
  {
    name: 'Github',
    icon: GitHub,
    link: GITHUB_URL,
  },
  {
    name: 'Twitter',
    icon: Twitter,
    link: TWITTER_URL,
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: LINKEDIN_URL,
  },
  { name: 'Email', icon: Mail, link: EMAIL_URL },
]
