"use client";

import Reveal from "./Reveal";
import BrandMark from "./BrandMark";
import { useBrand } from "./BrandProvider";
import { profile, brands } from "@/lib/content";
import { GithubIcon, LinkedinIcon, InstaIcon, MailIcon } from "./icons";

function HighlightedHeadline({
  text,
  phrase,
  style,
}: {
  text: string;
  phrase: string;
  style: "accent" | "serif";
}) {
  const idx = text.indexOf(phrase);
  if (idx === -1) return <>{text}</>;
  const cls =
    style === "serif" ? "serif-emph text-accent" : "text-accent";
  return (
    <>
      {text.slice(0, idx)}
      <span className={cls}>{phrase}</span>
      {text.slice(idx + phrase.length)}
    </>
  );
}

function DownArrow() {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
      <path d="M7 0V20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 15L7 21L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
      <path d="M0 7H22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 2L23 7L17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const { brand } = useBrand();
  const b = brands[brand];
  const isVermilion = brand === "vermilion";
  const isApricot = brand === "apricot";

  const headlineSize = isVermilion
    ? "text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
    : "text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl";

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40"
    >
      {isVermilion && (
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <BrandMark
            size={520}
            className="opacity-[0.06] text-accent"
          />
        </div>
      )}
      {!isVermilion && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
      )}

      <div className="container-content relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accentSoft">
              {b.hero.label}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 ${headlineSize}`}>
              <HighlightedHeadline
                text={profile.heroHeadline}
                phrase={b.hero.highlight}
                style={b.hero.emphasizeStyle}
              />
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
                className="text-muted transition-colors hover:text-accentSoft"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-accentSoft"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-accentSoft"
              >
                <InstaIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-muted transition-colors hover:text-accentSoft"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          {b.hero.visual === "diagram" && <SignalDiagram steps={b.hero.steps} />}
          {b.hero.visual === "editorial" && <VermilionEditorial steps={b.hero.steps} />}
          {b.hero.visual === "journey" && (
            <ApricotJourney steps={b.hero.steps} emphasize={b.hero.emphasize ?? []} />
          )}
        </Reveal>
      </div>
    </section>
  );
}

function SignalDiagram({ steps }: { steps: string[] }) {
  const activeIndex = steps.length - 1;
  return (
    <div className="card bg-grid p-6 sm:p-8">
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`flex h-16 w-full items-center justify-center rounded-[var(--r-sm)] border px-4 text-center text-sm font-medium transition-colors duration-500 ${
                i === activeIndex
                  ? "border-accent bg-accent/15 text-accentSoft"
                  : "border-line bg-surface text-white"
              }`}
              style={{ animation: `fadeUp 0.6s ${i * 0.12}s both` }}
            >
              <span className="font-mono mr-2 text-[10px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step}
            </div>
            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="my-1 flex h-5 items-center text-accent"
                style={{ animation: `fadeUp 0.6s ${i * 0.12 + 0.06}s both` }}
              >
                <DownArrow />
              </div>
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

function VermilionEditorial({ steps }: { steps: string[] }) {
  return (
    <div className="card overflow-hidden p-7 sm:p-9">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">The practice</p>
      <ul className="mt-5 space-y-3">
        {steps.map((step, i) => (
          <li
            key={step}
            className="flex items-baseline gap-4 border-b border-line pb-3 last:border-0"
            style={{ animation: `fadeUp 0.6s ${i * 0.1}s both` }}
          >
            <span className="font-mono text-xs text-accentSoft">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {step}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-muted">
        Engineering, leadership and product — treated as one craft.
      </p>
    </div>
  );
}

function ApricotJourney({ steps, emphasize }: { steps: string[]; emphasize: string[] }) {
  return (
    <div className="card p-7 sm:p-9">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Product journey</p>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {steps.map((step, i) => {
          const emph = emphasize.includes(step);
          return (
            <span key={step} className="flex items-center gap-2">
              <span
                className={`rounded-[var(--r-sm)] px-4 py-2 text-sm font-medium transition-colors ${
                  emph ? "bg-accent/15 text-accentSoft" : "bg-surface text-white"
                }`}
              >
                {step}
              </span>
              {i < steps.length - 1 && (
                <span className={emph || emphasize.includes(steps[i + 1]) ? "text-accent" : "text-muted"} aria-hidden>
                  <RightArrow />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        From problem to product — keeping people and experience at the center.
      </p>
    </div>
  );
}
