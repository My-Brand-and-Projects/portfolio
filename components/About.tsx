import Reveal from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-heading mt-3 max-w-2xl">{about.heading}</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={80}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="prose-copy">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid gap-4 sm:grid-cols-2">
              {about.principles.map((principle) => (
                <div key={principle.title} className="card">
                  <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
