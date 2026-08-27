import Reveal from "../Reveal";
import { creativelaya } from "@/lib/content";
import { ArrowUpRight } from "../icons";

export default function Creativelaya() {
  return (
    <section id="creativelaya" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content space-y-20">
        {/* Header */}
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Creativelaya</h2>
            <span className="chip">{creativelaya.category}</span>
          </div>
          <p className="mt-3 text-sm font-medium text-accentSoft">{creativelaya.subtitle}</p>
          <p className="prose-copy mt-4 max-w-2xl">{creativelaya.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <span>
              <span className="text-white">Role:</span> {creativelaya.role}
            </span>
          </div>
        </Reveal>

        {/* My role */}
        <Reveal>
          <div className="card">
            <h3 className="text-xl font-semibold text-white">{creativelaya.myRole.title}</h3>
            <p className="prose-copy mt-3 max-w-2xl">{creativelaya.myRole.intro}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {creativelaya.myRole.responsibilities.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-accentSoft">{creativelaya.myRole.distinction}</p>
          </div>
        </Reveal>

        {/* The story */}
        <Reveal>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            From developer to engineer who leads developers
          </h3>
          <p className="prose-copy mt-3 max-w-2xl">{creativelaya.story.narrative}</p>
        </Reveal>

        {/* Design + engineering collaboration */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white">{creativelaya.collaboration.heading}</h3>
          <p className="prose-copy mt-3 max-w-2xl">{creativelaya.collaboration.blurb}</p>
          <div className="mt-6 rounded-2xl border border-line bg-panel/40 p-6">
            <div className="flex flex-wrap items-center gap-2">
              {creativelaya.collaboration.flow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-lg bg-surface px-3 py-1.5 text-sm text-white">{step}</span>
                  {i < creativelaya.collaboration.flow.length - 1 && (
                    <span className="text-muted" aria-hidden>
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Leading fresher engineers */}
        <Reveal>
          <div className="card border-accent/30">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              {creativelaya.leading.heading}
            </h3>
            <p className="prose-copy mt-3 max-w-2xl">{creativelaya.leading.blurb}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {creativelaya.leading.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-accentSoft" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted">{creativelaya.leading.note}</p>
          </div>
        </Reveal>

        {/* Lead from the front */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white">{creativelaya.refinement.heading}</h3>
          <p className="prose-copy mt-3 max-w-2xl">{creativelaya.refinement.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {creativelaya.refinement.visual.map((item) => (
              <span key={item} className="chip border-accent/40 text-accentSoft">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Real-world delivery */}
        <Reveal>
          <div className="card">
            <p className="prose-copy">{creativelaya.delivery.blurb}</p>
            <p className="mt-4 text-xs text-muted">{creativelaya.delivery.note}</p>
          </div>
        </Reveal>

        {/* What I learned */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white">What this project taught me</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {creativelaya.lessons.map((lesson, i) => (
              <div key={lesson.index} className="card">
                <span className="font-mono text-sm text-accentSoft">{lesson.index}</span>
                <h4 className="mt-2 text-base font-semibold text-white">{lesson.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Career progression */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white">{creativelaya.progression.heading}</h3>
          <div className="mt-6 rounded-2xl border border-line bg-panel/40 p-6">
            <div className="flex flex-wrap items-center gap-2">
              {creativelaya.progression.flow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-lg bg-surface px-3 py-1.5 text-sm text-white">{step}</span>
                  {i < creativelaya.progression.flow.length - 1 && (
                    <span className="text-muted" aria-hidden>
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs text-muted">{creativelaya.progression.note}</p>
          <div className="mt-8">
            <a
              href={creativelaya.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Creativelaya <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
