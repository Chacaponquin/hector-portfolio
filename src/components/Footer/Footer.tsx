import { Left, SocialMedia } from './components';

export default function Footer() {
  return (
    <footer className="w-full bg-secondDarkColor py-10 justify-center flex px-8">
      <div className="text-white max-w-[1000px] w-full flex items-center stroke-white md:flex-row flex-col-reverse gap-y-5 justify-between">
        <Left />
        <SocialMedia />
      </div>
    </footer>
  );
}
