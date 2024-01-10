import React from 'react'
import { IconProps } from '../../../icon/interfaces'
import { useScreen } from '../../../shared/hooks'

interface Props {
  icon: React.FC<IconProps>
  title: string
}

export default function SectionHeader({ icon, title }: Props) {
  const { bigScreen } = useScreen(768)

  return (
    <div className="flex items-center gap-x-10 dark:stroke-primaryColor stroke-secondColor mb-7 esm:gap-x-5">
      {icon({ size: bigScreen ? 50 : 45 })}
      <h1 className="font-fontBold text-4xl esm:text-3xl">{title}</h1>
    </div>
  )
}
