export function StatusBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-900 bg-zinc-900/80 px-4 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-sm w-fit">
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      Available for opportunities
    </div>
  );
}

export function TechBadge({ text }: { text: string }) {
  return (
    <span className="tech-badge rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-blue-400 hover:bg-zinc-800">
      {text}
    </span>
  );
}
