import { ReactNode } from "react";

interface TerminalProps {
  title?: string;
  children: ReactNode;
}

export function Terminal({ title = "bash — diaa@netlab", children }: TerminalProps) {
  return (
    <div className="w-full max-w-full min-w-0 rounded-lg overflow-hidden border border-border bg-[var(--terminal)] font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-2 bg-black/40 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-muted-foreground">{title}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-[var(--terminal-foreground)] leading-relaxed">
        {children}
      </pre>
    </div>
  );
}

export function Prompt({ children }: { children: ReactNode }) {
  return (
    <span>
      <span className="text-[var(--terminal-prompt)]">diaa@netlab</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-secondary">~</span>
      <span className="text-muted-foreground">$ </span>
      <span className="text-[var(--terminal-foreground)]">{children}</span>
      {"\n"}
    </span>
  );
}
