import Reveal from "../Reveal";
import { coachpodium } from "@/lib/content";
import { ArrowUpRight } from "../icons";

export default function CoachPodium() {
  return (
    <section id="coachpodium" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content space-y-16">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">CoachPodium</h2>
            <span className="chip">{coachpodium.category}</span>
          </div>
          <p className="prose-copy mt-4 max-w-2xl">{coachpodium.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <span>
              <span className="text-white">Role:</span> {coachpodium.role}
            </span>
            <span>
              <span className="text-white">Involvement:</span> {coachpodium.involvement}
            </span>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Public-facing functionality
              </h3>
              <ul className="mt-4 space-y-2">
                {coachpodium.publicFunctionality.map((item) => (
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
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">My contribution</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{coachpodium.contribution}</p>
              <div className="mt-5 space-y-3 text-sm">
                <Row label="Backend" value={coachpodium.areas.backend} />
                <Row label="Frontend" value={coachpodium.areas.frontend} />
                <Row label="Integrations" value={coachpodium.areas.integrations} />
                <Row label="Product" value={coachpodium.areas.product} />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="text-xl font-semibold text-white">Case study</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <StudyBlock title="The product" body={coachpodium.caseStudy.product} />
              <StudyBlock title="My role" body={coachpodium.caseStudy.role} />
              <StudyBlock title="Product thinking" body={coachpodium.caseStudy.productThinking} />
              <StudyBlock title="What I learned" body={coachpodium.caseStudy.learned} />
            </div>
            <div className="card">
              <p className="text-xs uppercase tracking-wider text-muted">The engineering</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {coachpodium.caseStudy.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg bg-surface px-3 py-1.5 text-sm text-white">{step}</span>
                    {i < coachpodium.caseStudy.flow.length - 1 && (
                      <span className="text-muted" aria-hidden>
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted">
                No user counts, revenue or performance metrics are claimed.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href={coachpodium.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit CoachPodium <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
      <span className="text-muted">{label}</span>
      <span className="text-right text-white">{value}</span>
    </div>
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
