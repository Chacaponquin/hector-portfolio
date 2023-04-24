export default function SectionContainer({ children }: { children: JSX.Element }) {
  return (
    <section className="w-full flex justify-center px-8">
      <div className="max-w-[1000px] w-full md:pb-32 pb-20">{children}</div>
    </section>
  );
}
