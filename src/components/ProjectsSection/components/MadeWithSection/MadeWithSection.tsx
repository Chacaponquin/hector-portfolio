export default function MadeWithSection({ madeWith }: { madeWith: string[] }) {
  return (
    <div className="flex flex-wrap w-full gap-x-4 mt-3 gap-y-2">
      {madeWith.map((t, j) => (
        <div key={j} className="font-fontCode py-1 px-3 rounded-sm bg-black/20">
          {t}
        </div>
      ))}
    </div>
  );
}
