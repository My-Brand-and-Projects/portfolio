import Reveal from "../Reveal";
import { toastmasters } from "@/lib/content";
import { ArrowUpRight } from "../icons";

export default function Toastmasters() {
  return (
    <section id="toastmasters" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content space-y-16">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Founders Toastmasters Club
            </h2>
            <span className="chip">{toastmasters.label}</span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-wider text-muted">{toastmasters.category}</p>
          <p className="prose-copy mt-4 max-w-2xl">{toastmasters.narrative}</p>
        </Reveal>

        <Reveal>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{toastmasters.whyHeadline}</h3>
          <p className="prose-copy mt-3 max-w-2xl">{toastmasters.whyBlurb}</p>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {toastmasters.steps.map((step, i) => (
              <div key={step.title} className="card">
                <span className="font-mono text-sm text-accentSoft">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-2 text-base font-semibold text-white">{step.title}</h4>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                What the site communicates
              </h3>
              <ul className="mt-4 space-y-2">
                {toastmasters.communicates.map((item) => (
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
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                What this project emphasizes
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {toastmasters.emphasizes.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted">{toastmasters.context}</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <a
            href={toastmasters.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Website <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
