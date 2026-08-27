"use client";

import { useEffect, useState } from "react";
import { useBrand } from "./BrandProvider";
import { brandOrder, brands, type BrandId } from "@/lib/content";

export default function BrandLab() {
  const { brand, preview, setBrand, finalize } = useBrand();
  const [compareOpen, setCompareOpen] = useState(false);
  const [finalizeOpen, setFinalizeOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCompareOpen(false);
        setFinalizeOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!preview) return null;

  return (
    <>
      {/* Floating brand dock */}
      <div className="fixed inset-x-0 top-[4.5rem] z-40 flex justify-center px-4">
        <div className="flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-line bg-panel/90 p-3 shadow-2xl backdrop-blur md:flex-row md:items-center md:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accentSoft">
              Brand Direction
            </span>
            <span className="hidden rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accentSoft sm:inline">
              Preview Mode
            </span>
          </div>

          <div
            role="group"
            aria-label="Brand direction"
            className="flex flex-1 items-center gap-1 rounded-xl border border-line bg-ink/60 p-1"
          >
            {brandOrder.map((id) => {
              const active = id === brand;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setBrand(id)}
                  className={`flex-1 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                    active
                      ? "bg-accent text-ink"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {brands[id].name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCompareOpen((v) => !v)}
              className="rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accentSoft"
            >
              Compare
            </button>
            <button
              type="button"
              onClick={() => setFinalizeOpen(true)}
              className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-ink transition-transform hover:-translate-y-px"
            >
              Finalize
            </button>
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] uppercase tracking-[0.22em] text-muted">
          Brand Direction Preview — design exploration tool
        </p>
      </div>

      {/* Compare panel */}
      {compareOpen && (
        <div className="fixed bottom-4 right-4 z-40 w-[min(92vw,22rem)]">
          <div className="rounded-2xl border border-line bg-panel/95 p-4 shadow-2xl backdrop-blur">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">
                Compare Brand Directions
              </h3>
              <button
                type="button"
                aria-label="Close comparison"
                onClick={() => setCompareOpen(false)}
                className="text-muted transition-colors hover:text-white"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-2">
              {brandOrder.map((id) => (
                <li
                  key={id}
                  className="flex items-start justify-between gap-3 rounded-xl border border-line bg-ink/40 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{brands[id].name}</p>
                    <p className="mt-0.5 text-xs text-muted">{brands[id].description}</p>
                  </div>
                  <span
                    className="mt-1 h-4 w-4 shrink-0 rounded-full ring-1 ring-line"
                    style={{ backgroundColor: brands[id].accentHex }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Finalize / decision screen */}
      {finalizeOpen && <FinalizeModal brand={brand} onClose={() => setFinalizeOpen(false)} onConfirm={() => finalize(brand)} />}
    </>
  );
}

function FinalizeModal({
  brand,
  onClose,
  onConfirm,
}: {
  brand: BrandId;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const b = brands[brand];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Finalize brand direction"
    >
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">
          Your Brand Direction
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white">{b.name}</h2>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted">Color</dt>
            <dd className="flex items-center gap-2 font-mono">
              <span
                className="h-4 w-4 rounded-full ring-1 ring-line"
                style={{ backgroundColor: b.accentHex }}
              />
              {b.accentHex}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-muted">Personality</dt>
            <dd className="max-w-[60%] text-right text-white">{b.personality.slice(0, 5).join(" · ")}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-muted">Visual language</dt>
            <dd className="max-w-[60%] text-right text-white">{b.description}</dd>
          </div>
        </dl>

        <p className="mt-5 rounded-xl border border-line bg-ink/40 p-3 text-xs leading-relaxed text-muted">
          Once finalized, the other two directions and all preview controls will be removed. This
          will become the permanent visual identity of Bibek Jaiswal.
        </p>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="btn-secondary">
            Go Back
          </button>
          <button type="button" onClick={onConfirm} className="btn-primary">
            Finalize Brand
          </button>
        </div>
      </div>
    </div>
  );
}
