import type { BrandId } from "@/lib/content";

export const MARK_GLYPHS: Record<BrandId, string> = {
  signal: `
    <path d="M30 26 V74 M30 26 H47 M30 74 H47" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
    <path d="M70 26 V74 M70 26 H53 M70 74 H53" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
    <rect x="43" y="43" width="14" height="14" rx="2" fill="currentColor"/>
  `,
  vermilion: `
    <path d="M30 26 L66 26 L46 74 L30 74 Z" fill="currentColor"/>
    <rect x="58" y="26" width="12" height="48" rx="2" fill="currentColor"/>
  `,
  apricot: `
    <circle cx="38" cy="50" r="17" fill="none" stroke="currentColor" stroke-width="8"/>
    <rect x="50" y="36" width="28" height="28" rx="11" fill="currentColor"/>
  `,
};

export const MARK_VIEWBOX = "0 0 100 100";
