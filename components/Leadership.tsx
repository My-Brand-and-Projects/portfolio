import Reveal from "./Reveal";
import { leadership } from "@/lib/content";

export default function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content space-y-16">
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="section-heading mt-3">{leadership.heading}</h2>
          <p className="prose-copy mt-4 max-w-2xl">{leadership.blurb}</p>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card">
              <p className="text-xs uppercase tracking-wider text-accentSoft">
                Professional / Technical Leadership
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">Creativelaya</h3>
              <p className="mt-1 text-sm text-muted">
                Led developers, mentored fresher frontend engineers and collaborated with designers on a
                production website.
              </p>
            </div>
            <div className="card">
              <p className="text-xs uppercase tracking-wider text-accentSoft">Community Leadership</p>
              <h3 className="mt-2 text-base font-semibold text-white">Founders Toastmasters Club</h3>
              <p className="mt-1 text-sm text-muted">SAA → VPPR → VPE progression and club web presence.</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">
            Leadership experience both inside software development and outside the workplace.
          </p>
        </Reveal>

        {/* Timeline: horizontal on desktop, vertical on mobile */}
        <Reveal>
          <div className="relative">
            {/* Desktop horizontal */}
            <ol className="hidden items-stretch gap-4 md:flex">
              {leadership.progression.map((step, i) => (
                <li key={step.role} className="flex flex-1 items-stretch">
                  <div className="card flex flex-1 flex-col">
                    <span className="font-mono text-sm text-accentSoft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{step.role}</h3>
                    <p className="mt-1 text-sm text-muted">{step.note}</p>
                  </div>
                  {i < leadership.progression.length - 1 && (
                    <div className="flex w-8 items-center justify-center text-muted" aria-hidden>
                      →
                    </div>
                  )}
                </li>
              ))}
            </ol>

            {/* Mobile vertical */}
            <ol className="relative space-y-4 border-l border-line pl-6 md:hidden">
              {leadership.progression.map((step, i) => (
                <li key={step.role} className="relative">
                  <span className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full border border-accent bg-ink" />
                  <div className="card">
                    <span className="font-mono text-sm text-accentSoft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{step.role}</h3>
                    <p className="mt-1 text-sm text-muted">{step.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <div className="card">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Current</h3>
              <p className="mt-2 text-lg font-semibold text-white">{leadership.current}</p>
              <h3 className="mt-5 text-sm font-medium uppercase tracking-wider text-muted">Previous</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {leadership.previous.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <p className="prose-copy">{leadership.connection}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {leadership.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
