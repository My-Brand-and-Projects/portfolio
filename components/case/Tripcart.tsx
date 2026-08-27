import Reveal from "../Reveal";
import { tripcart } from "@/lib/content";
import { ArrowUpRight } from "../icons";

export default function Tripcart() {
  return (
    <section id="tripcart" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content space-y-20">
        {/* Header */}
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tripcart</h2>
            <span className="chip">{tripcart.category}</span>
          </div>
          <p className="prose-copy mt-4 max-w-2xl">{tripcart.productBlurb}</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <span>
              <span className="text-white">Role:</span> {tripcart.role}
            </span>
            <span>
              <span className="text-white">Involvement:</span> {tripcart.involvement}
            </span>
          </div>
        </Reveal>

        {/* Contribution */}
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Backend</h3>
              <ul className="mt-4 space-y-2">
                {tripcart.contribution.backend.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Frontend</h3>
              <ul className="mt-4 space-y-2">
                {tripcart.contribution.frontend.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accentSoft" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Analytics */}
        <Reveal>
          <div className="card">
            <h3 className="text-xl font-semibold text-white">Multi-tenant analytics</h3>
            <p className="prose-copy mt-3 max-w-2xl">{tripcart.analytics.problem}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Technologies</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tripcart.analytics.technologies.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Tracked events</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tripcart.analytics.events.map((e) => (
                    <span key={e} className="chip font-mono text-[11px]">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted">
              Architecture-level work — no measurement IDs, credentials or internal infrastructure are shown.
            </p>
          </div>
        </Reveal>

        {/* Payments map */}
        <Reveal>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{tripcart.paymentsHeadline}</h3>
          <p className="prose-copy mt-3 max-w-2xl">{tripcart.paymentsBlurb}</p>
          <div className="mt-8 rounded-2xl border border-line bg-panel/40 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink">
                Tripcart
              </span>
              <span className="text-muted" aria-hidden>
                →
              </span>
              <div className="flex flex-wrap gap-2">
                {tripcart.paymentGateways.map((g) => (
                  <span key={g} className="chip">
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-5 text-xs text-muted">
              Experience working across multiple payment ecosystems — each with its own APIs, authentication,
              workflows, currencies and behaviors. Listed as exposure to these providers, not individual claims of
              independent implementation.
            </p>
          </div>
        </Reveal>

        {/* Product & UX */}
        <Reveal>
          <div className="card border-accent/30">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{tripcart.uxHeadline}</h3>
            <p className="prose-copy mt-3 max-w-2xl">{tripcart.uxBlurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tripcart.uxAreas.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Case study flow */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white">Case study</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <StudyBlock title="Product" body={tripcart.caseStudy.product} />
              <StudyBlock title="Problem space" body={tripcart.caseStudy.problemSpace} />
              <StudyBlock title="My contribution" body={tripcart.caseStudy.myContribution} />
              <StudyBlock title="Engineering challenges" body={tripcart.caseStudy.challenges} />
              <StudyBlock title="Product thinking" body={tripcart.caseStudy.productThinking} />
            </div>
            <div className="space-y-6">
              <div className="card">
                <p className="text-xs uppercase tracking-wider text-muted">Engineering surface</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {tripcart.caseStudy.flow.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-lg bg-surface px-3 py-1.5 text-sm text-white">{step}</span>
                      {i < tripcart.caseStudy.flow.length - 1 && (
                        <span className="text-muted" aria-hidden>
                          ↓
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card border-accent/40">
                <p className="font-mono text-2xl font-semibold text-accentSoft">
                  {tripcart.outcomeStat.value}
                </p>
                <p className="mt-2 text-xs text-muted">{tripcart.outcomeStat.note}</p>
                <p className="mt-3 text-sm text-muted">{tripcart.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href={tripcart.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Tripcart <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-accentSoft">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
