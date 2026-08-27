import Reveal from "./Reveal";
import { profile, heroVisualSteps } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="container-content grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="eyebrow">{profile.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="prose-copy mt-6 max-w-xl">{profile.heroSupporting}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={profile.heroCtaPrimary.href} className="btn-primary">
                {profile.heroCtaPrimary.label}
              </a>
              <a href={profile.heroCtaSecondary.href} className="btn-secondary">
                {profile.heroCtaSecondary.label}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <ProductSystemVisual steps={heroVisualSteps} />
        </Reveal>
      </div>
    </section>
  );
}

function ProductSystemVisual({ steps }: { steps: string[] }) {
  return (
    <div className="relative rounded-3xl border border-line bg-panel/40 p-6 sm:p-8">
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className="group flex h-16 w-full items-center justify-center rounded-xl border border-line bg-surface px-4 text-center text-sm font-medium text-white transition-colors duration-500 hover:border-accent"
              style={{ animation: `fadeUp 0.6s ${i * 0.12}s both` }}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="my-1 h-5 w-px bg-gradient-to-b from-accent/60 to-line"
                style={{ animation: `fadeUp 0.6s ${i * 0.12 + 0.06}s both` }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted">
        Working across the product — from idea to interface to user.
      </p>
    </div>
  );
}
