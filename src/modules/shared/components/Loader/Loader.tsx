import { RaceBy } from '@uiball/loaders';

export default function Loader({ className, size }: { className: string; size: number }) {
  return (
    <div className={className}>
      <RaceBy color={'#48dbfb'} size={size} />
    </div>
  );
}
