import { ContactButton, CvButton } from './components';

export default function Buttons() {
  return (
    <div className="flex gap-5 items-center">
      <ContactButton />
      <CvButton />
    </div>
  );
}
