import Reveal from "./Reveal";
import { github, linkedin } from "@/lib/content";
import { GithubIcon, LinkedinIcon, ArrowUpRight } from "./icons";

export default function GitHub() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <div className="card flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="section-heading">{github.heading}</h2>
              <p className="mt-3 max-w-xl text-sm text-muted">{github.note}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={github.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <GithubIcon className="h-4 w-4" />
                {github.cta}
              </a>
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon className="h-4 w-4" />
                {linkedin.cta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
