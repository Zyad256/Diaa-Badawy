export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Diaa Eldin Badawy</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
