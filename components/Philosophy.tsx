import Reveal from "./Reveal";
import { philosophy } from "@/lib/content";

export default function Philosophy() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content space-y-24">
        {/* How I build */}
        <div>
          <Reveal>
            <p className="eyebrow">Engineering philosophy</p>
            <h2 className="section-heading mt-3">{philosophy.heading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.principles.map((p, i) => (
              <Reveal key={p.index} delay={i * 80}>
                <div className="card h-full">
                  <span className="font-mono text-sm text-accentSoft">{p.index}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* I think beyond the ticket */}
        <div>
          <Reveal>
            <h2 className="section-heading max-w-2xl">{philosophy.productMindsetHeading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card h-full">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                  Traditional implementation
                </h3>
                <Flow items={philosophy.traditional} accent={false} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card h-full border-accent/40">
                <h3 className="text-sm font-medium uppercase tracking-wider text-accentSoft">
                  Bibek&apos;s approach
                </h3>
                <Flow items={philosophy.bibek} accent />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Beyond the stack */}
        <div>
          <Reveal>
            <div className="card border-accent/30 bg-panel/40">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex items-center justify-center">
                  <div className="flex h-36 w-36 flex-col items-center justify-center gap-1 rounded-full border border-accent/50 bg-accent/10 text-center ring-1 ring-accent/20 sm:h-40 sm:w-40">
                    {philosophy.beyondHeading.split(" · ").map((word) => (
                      <span
                        key={word}
                        className="text-sm font-semibold leading-tight text-accentSoft"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  {philosophy.pillars.map((pillar) => (
                    <div key={pillar.title}>
                      <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Flow({ items, accent }: { items: string[]; accent: boolean }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          <span
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
              accent ? "bg-accent/15 text-accentSoft" : "bg-surface text-muted"
            }`}
          >
            {item}
          </span>
          {i < items.length - 1 && (
            <span className={accent ? "text-accentSoft" : "text-muted"} aria-hidden>
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
