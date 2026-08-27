"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/components/BrandProvider";
import { brands, profile, type BrandId } from "@/lib/content";
import BrandMark from "@/components/BrandMark";

const FONT_NAMES: Record<BrandId, { display: string; sans: string; mono: string; serif: string }> = {
  signal: { display: "Space Grotesk", sans: "Manrope", mono: "JetBrains Mono", serif: "Space Grotesk" },
  vermilion: { display: "Plus Jakarta Sans", sans: "DM Sans", mono: "JetBrains Mono", serif: "Instrument Serif" },
  apricot: { display: "Sora", sans: "Sora", mono: "JetBrains Mono", serif: "Instrument Serif" },
};

type Tokens = Record<string, string>;

function rgbToHex(triplet: string) {
  const parts = triplet.trim().split(/\s+/).map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return triplet.trim();
  return "#" + parts.map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}

const COLOR_ROWS: { label: string; tokenKey: string }[] = [
  { label: "Primary / Signal", tokenKey: "accent" },
  { label: "Accent soft", tokenKey: "accentSoft" },
  { label: "Background", tokenKey: "ink" },
  { label: "Secondary background", tokenKey: "surface" },
  { label: "Surface", tokenKey: "panel" },
  { label: "Primary text", tokenKey: "text" },
  { label: "Secondary text", tokenKey: "muted" },
  { label: "Border", tokenKey: "line" },
];

export default function BrandBiblePage() {
  const { brand } = useBrand();
  const [tokens, setTokens] = useState<Tokens>({});
  const b = brands[brand];
  const fonts = FONT_NAMES[brand];

  useEffect(() => {
    const cs = getComputedStyle(document.documentElement);
    const read = (v: string) => cs.getPropertyValue(v).trim();
    setTokens({
      accent: read("--c-accent"),
      accentSoft: read("--c-accent-soft"),
      ink: read("--c-ink"),
      surface: read("--c-surface"),
      panel: read("--c-panel"),
      text: read("--c-text"),
      muted: read("--c-muted"),
      line: read("--c-line"),
      rCard: read("--r-card"),
      rBtn: read("--r-btn"),
      rPill: read("--r-pill"),
      bw: read("--bw"),
    });
  }, [brand]);

  const swatch = (triplet: string) => ({
    backgroundColor: `rgb(${triplet})`,
  });

  return (
    <main className="min-h-screen pb-24 pt-28">
      <div className="container-content">
        <header className="mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accentSoft">
            Internal Design System
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Bibek Jaiswal — Personal Brand Bible
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="chip text-[11px]">Finalized identity: {b.name}</span>
          </div>
        </header>

        <div className="space-y-8">
          <Section n="01" title="Brand Identity">
            <Pair k="Brand name" v={profile.name} />
            <Pair k="Role" v={profile.title} />
            <Pair k="Positioning" v={profile.positioning} />
            <Pair k="Philosophy" v="Great software is more than functionality." />
          </Section>

          <Section n="02" title="Brand Personality">
            <div className="flex flex-wrap gap-2">
              {b.personality.map((p) => (
                <span key={p} className="chip text-[11px]">
                  {p}
                </span>
              ))}
            </div>
          </Section>

          <Section n="03" title="Color System">
            <div className="grid gap-3 sm:grid-cols-2">
              {COLOR_ROWS.map((row) => (
                <div key={row.tokenKey} className="flex items-center gap-3 rounded-xl border border-line bg-panel/40 p-3">
                  <span className="h-8 w-8 shrink-0 rounded-lg ring-1 ring-line" style={swatch(tokens[row.tokenKey] ?? "")} />
                  <div className="min-w-0">
                    <p className="text-sm text-white">{row.label}</p>
                    <p className="font-mono text-xs text-muted">
                      {tokens[row.tokenKey] ? rgbToHex(tokens[row.tokenKey] ?? "") : "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Use the accent sparingly — roughly 5–10% of any given surface. The remaining space stays
              in dark neutrals so the accent remains a memorable signal, not a wash.
            </p>
          </Section>

          <Section n="04" title="Typography">
            <Pair k="Display" v={fonts.display} />
            <Pair k="Heading" v={fonts.display} />
            <Pair k="Body" v={fonts.sans} />
            <Pair k="Mono / technical" v={fonts.mono} />
            {brand !== "signal" && <Pair k="Editorial serif (sparingly)" v={fonts.serif} />}
            <div className="mt-4 space-y-2">
              <p className="text-3xl font-semibold text-white">Aa — {b.tagline}</p>
              <p className="text-sm text-muted">
                The body uses a clean, highly readable sans. Monospace is reserved for project numbers,
                technical metadata and small labels.
              </p>
            </div>
          </Section>

          <Section n="05" title="Logo / Mark">
            <div className="flex items-center gap-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-line bg-ink">
                <BrandMark size={56} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-white">Geometric monogram</p>
                <p className="mt-1 max-w-md text-sm text-muted">
                  Works as favicon, navigation mark, GitHub/LinkedIn avatar, resume mark and presentation
                  mark. Keep minimum size at 24px and preserve clear space equal to the mark&apos;s cap height.
                </p>
              </div>
            </div>
          </Section>

          <Section n="06" title="UI Language">
            <Pair k="Border radius — card" v={tokens.rCard || "—"} />
            <Pair k="Border radius — button" v={tokens.rBtn || "—"} />
            <Pair k="Border radius — pill" v={tokens.rPill || "—"} />
            <Pair k="Border weight" v={tokens.bw || "—"} />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="btn-primary">Primary</button>
              <button className="btn-secondary">Secondary</button>
              <span className="chip text-[11px]">Tag</span>
              <span className="rounded-[var(--r-sm)] border border-line bg-surface px-3 py-1.5 text-xs text-white">Badge</span>
            </div>
          </Section>

          <Section n="07" title="Motion">
            <Pair k="Hover duration" v="0.3s" />
            <Pair k="Entrance" v="Reveal — 0.7s ease, translateY 16px" />
            <Pair k="Page transitions" v="Brand switch — 0.35s color/background" />
            <Pair k="Reduced motion" v="All animation disabled via prefers-reduced-motion" />
          </Section>

          <Section n="08" title="Image Language">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Project screenshots remain authentic to each product&apos;s own brand. Bibek&apos;s personal
              brand controls the framing: consistent corner radius, thin borders, and a single accent
              highlight. Hover reveals a soft accent glow following the cursor. Never recolor a product&apos;s
              real logo or screenshot to match the personal accent.
            </p>
          </Section>

          <Section n="09" title="Graphic Language">
            <div className="flex flex-wrap gap-2">
              {["Section numbering", "Monospace labels", "Accent indicators", "Grid texture (Signal)", "Diagrams", "Thin 1px borders", "Dots"].map(
                (g) => (
                  <span key={g} className="chip text-[11px]">
                    {g}
                  </span>
                )
              )}
            </div>
          </Section>

          <Section n="10" title="Voice">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Technical, thoughtful, direct, human, confident — never arrogant. Avoid &quot;passionate
              developer&quot;, &quot;rockstar&quot;, &quot;10x engineer&quot;, &quot;cutting-edge solutions&quot;,
              &quot;revolutionary&quot; or &quot;world-class&quot;. Keep language specific and grounded.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="card">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accentSoft">{n}</span>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Pair({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line/60 py-2 last:border-0">
      <dt className="text-sm text-muted">{k}</dt>
      <dd className="max-w-[60%] text-right text-sm text-white">{v}</dd>
    </div>
  );
}
