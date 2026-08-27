"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { brands, type BrandId } from "@/lib/content";
import { MARK_GLYPHS, MARK_VIEWBOX } from "@/lib/marks";

const BRAND: BrandId = "apricot";

type BrandContextValue = { brand: BrandId };

const BrandContext = createContext<BrandContextValue | null>(null);

export function BrandProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.dataset.brand = BRAND;
    const hex = brands[BRAND].accentHex;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}"><rect width="100" height="100" rx="22" fill="#141210"/><g style="color:${hex}">${MARK_GLYPHS[BRAND]}</g></svg>`;
    const uri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = uri;
  }, []);

  return <BrandContext.Provider value={{ brand: BRAND }}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within BrandProvider");
  return ctx;
}
