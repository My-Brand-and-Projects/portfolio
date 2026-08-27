import Reveal from "./Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="section-heading mt-3">Where I work now.</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="card mt-10 border-l-2 border-l-accent">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
              <span className="chip">{experience.role}</span>
            </div>
            <p className="prose-copy mt-4 max-w-2xl">{experience.description}</p>
            <p className="mt-4 text-xs text-muted">{experience.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
