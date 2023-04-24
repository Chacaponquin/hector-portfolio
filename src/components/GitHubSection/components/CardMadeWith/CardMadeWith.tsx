export default function CardMadeWith({ madeWith }: { madeWith: Array<string> }) {
  return (
    <div className="flex gap-x-2 flex-wrap gap-y-1 text-sm mt-4">
      {madeWith.map((s, j) => (
        <div
          key={j}
          className="bg-black/20 darK:bg-white/20 py-1 px-2 dark:text-white text-black font-fontCode rounded-sm"
        >
          {s}
        </div>
      ))}
    </div>
  );
}
