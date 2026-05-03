import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="06 / contact"
          title="Let's talk networks"
          subtitle="Open to internships, junior roles and collaboration on lab projects."
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <a
              href="mailto:diaa.badawy@example.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/60 hover:border-primary/50 transition"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center font-mono">@</div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="text-sm">diaa.badawy@example.com</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/diaa-badawy-492366256"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-secondary/40 bg-secondary/10 hover:bg-secondary/20 transition"
            >
              <div className="w-10 h-10 rounded-md bg-secondary/20 text-secondary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">LinkedIn</div>
                <div className="text-sm">linkedin.com/in/diaa-badawy-492366256</div>
              </div>
            </a>
            <div className="p-4 rounded-lg border border-border bg-card/60">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Status</div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for internships & junior roles
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-xl border border-border bg-card/60 p-6 space-y-4"
          >
            <div>
              <label className="block font-mono text-[11px] text-primary mb-1">name</label>
              <input
                required
                className="w-full px-3 py-2 rounded-md bg-background/60 border border-border focus:border-primary outline-none transition font-mono text-sm"
                placeholder="Jane Recruiter"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-primary mb-1">email</label>
              <input
                required type="email"
                className="w-full px-3 py-2 rounded-md bg-background/60 border border-border focus:border-primary outline-none transition font-mono text-sm"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-primary mb-1">message</label>
              <textarea
                required rows={5}
                className="w-full px-3 py-2 rounded-md bg-background/60 border border-border focus:border-primary outline-none transition font-mono text-sm resize-none"
                placeholder="We have a junior network engineer role..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              {sent ? "✓ Message queued" : "Send message"}
            </button>
            {sent && (
              <p className="text-xs text-muted-foreground font-mono">
                // demo form — wire to email service to send for real
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
