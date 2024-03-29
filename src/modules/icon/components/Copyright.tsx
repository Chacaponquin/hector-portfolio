import { IconProps } from '../interfaces'
import { DEFAULT_ICON_SIZE } from '../constants'

export default function Copyright({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" id="copyright-sign">
      <path d="M11,9h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v4a3,3,0,0,0,3,3h2a3,3,0,0,0,3-3,1,1,0,0,0-2,0,1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V10A1,1,0,0,1,11,9Zm1-7A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
    </svg>
  )
}
