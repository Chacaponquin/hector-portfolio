import { DEFAULT_ICON_SIZE } from '../constants/Size';
import { IconProps } from '../interfaces/IconProps.interface';

export default function Folder({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M28 22L33 27L28 32" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 22L15 27L20 32" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
