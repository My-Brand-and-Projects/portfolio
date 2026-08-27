import Reveal from "./Reveal";
import { stack } from "@/lib/content";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content space-y-14">
        <Reveal>
          <p className="eyebrow">Technical stack</p>
          <h2 className="section-heading mt-3">What I work with.</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Core</h3>
              <ul className="mt-4 space-y-2">
                {stack.core.map((t) => (
                  <li key={t} className="text-base text-white">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Frontend</h3>
              <ul className="mt-4 space-y-2">
                {stack.frontend.map((t) => (
                  <li key={t} className="text-base text-white">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Infrastructure</h3>
              <ul className="mt-4 space-y-2">
                {stack.infrastructure.map((t) => (
                  <li key={t.name}>
                    <span className="text-base text-white">{t.name}</span>
                    {t.note && <p className="text-xs text-muted">{t.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="card">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
              Integrations & Payments
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.integrations.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {stack.contextual.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="card h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="chip text-[10px]">{item.tag}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
