export function Footer() {
  return (
    <footer id="footer" className="border-t border-zinc-900 bg-black py-10 px-6 sm:px-16" aria-label="Footer">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold text-blue-400 tracking-tight">
          potah<span className="text-blue-400">.</span>dev
        </span>
        <p className="text-sm text-zinc-500">Built with Next.js · React Three Fiber · Tailwind CSS</p>
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Potah. All rights reserved.</p>
      </div>
    </footer>
  );
}
