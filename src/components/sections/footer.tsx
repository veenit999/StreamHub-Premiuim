export function Footer() {
  return (
    <footer className="relative px-5 py-14 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-apple-blue text-white text-[11px] font-bold">
            S
          </span>
          StreamHub Premium
        </div>
        <p className="text-sm text-secondary text-center">
          Premium Entertainment. Simplified. © {new Date().getFullYear()} StreamHub Premium.
        </p>
        <div className="flex items-center gap-5 text-sm text-secondary">
          <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms</a>
          <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
