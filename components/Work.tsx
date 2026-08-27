"use client";

import Reveal from "./Reveal";
import { useBrand } from "./BrandProvider";
import { projects, brands } from "@/lib/content";
import { ArrowUpRight } from "./icons";

export default function Work() {
  const { brand } = useBrand();
  const featured = brands[brand].featured;

  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Featured work</p>
          <h2 className="section-heading mt-3 max-w-2xl">Products I&apos;ve helped build</h2>
          <p className="prose-copy mt-4 max-w-xl">
            Real products, real problems, and real engineering work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isFeatured = project.index === featured;
            return (
              <Reveal key={project.id} delay={i * 80}>
                <article
                  className={`card group flex h-full flex-col ${
                    isFeatured ? "border-accent/60 ring-1 ring-accent/30" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-accentSoft">{project.index}</span>
                    {isFeatured ? (
                      <span className="chip text-[10px]">Featured</span>
                    ) : (
                      <span className="chip text-[10px]">
                        {project.category.split("·")[0].trim()}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">{project.category}</p>
                  <p className="prose-copy mt-4 text-sm">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                    <a href={project.cardCta.href} className="btn-secondary text-xs">
                      {project.cardCta.label}
                    </a>
                    <a
                      href={project.visitCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent inline-flex items-center gap-1 text-xs font-medium"
                    >
                      {project.visitCta.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
