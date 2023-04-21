export default function SectionContainer({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full flex justify-center px-10">
      <div className="max-w-[1000px] w-full pb-32">{children}</div>
    </div>
  );
}
