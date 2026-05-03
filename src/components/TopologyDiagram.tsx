interface Node { id: string; x: number; y: number; label: string; type?: "router" | "switch" | "host" | "cloud"; }
interface Edge { from: string; to: string; label?: string; dashed?: boolean; }

export function TopologyDiagram({
  nodes,
  edges,
  height = 220,
}: {
  nodes: Node[];
  edges: Edge[];
  height?: number;
}) {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="relative rounded-lg border border-border bg-card/40 overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg viewBox="0 0 400 240" className="relative w-full" style={{ height }}>
        {edges.map((e, i) => {
          const a = map[e.from], b = map[e.to];
          if (!a || !b) return null;
          return (
            <g key={i}>
              <line
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="oklch(0.78 0.15 200)" strokeWidth="1.5"
                strokeDasharray={e.dashed ? "4 4" : undefined}
                opacity="0.7"
              />
              {e.label && (
                <text
                  x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 - 6}
                  fontSize="9" fill="oklch(0.72 0.02 230)"
                  textAnchor="middle" fontFamily="monospace"
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="18" fill="oklch(0.22 0.03 240)" stroke="oklch(0.78 0.15 200)" strokeWidth="1.5" />
            <text x={n.x} y={n.y + 3} fontSize="9" fill="oklch(0.78 0.15 200)" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
              {n.type === "router" ? "R" : n.type === "switch" ? "SW" : n.type === "cloud" ? "☁" : "PC"}
            </text>
            <text x={n.x} y={n.y + 32} fontSize="9" fill="oklch(0.92 0.01 220)" textAnchor="middle" fontFamily="monospace">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
