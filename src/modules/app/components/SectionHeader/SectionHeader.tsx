import React from 'react';
import { IconProps } from '../../../icon/interfaces/IconProps.interface';

interface SectionHeaderProps {
  icon: React.FC<IconProps>;
  title: string;
}

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-x-10 stroke-primaryColor">
      {icon({ size: 50 })}
      <h1 className="font-fontTitle text-4xl">{title}</h1>
    </div>
  );
}
