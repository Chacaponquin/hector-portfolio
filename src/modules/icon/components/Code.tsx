import React from 'react';
import { IconProps } from '../interfaces/IconProps.interface';
import { DEFAULT_ICON_SIZE } from '../constants/Size';

export default function Code({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 13L4 25.4322L16 37"
        stroke="inherit"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32 13L44 25.4322L32 37"
        stroke="inherit"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M28 4L21 44" stroke="inherit" stroke-width="4" stroke-linecap="round" />
    </svg>
  );
}
