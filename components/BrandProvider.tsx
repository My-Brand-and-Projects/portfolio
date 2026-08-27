"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { brandOrder, brands, type BrandId } from "@/lib/content";
import { MARK_GLYPHS, MARK_VIEWBOX } from "@/lib/marks";

type BrandContextValue = {
  brand: BrandId;
  finalized: BrandId | null;
  preview: boolean;
  setBrand: (b: BrandId) => void;
  finalize: (b: BrandId) => void;
  exitFinalized: () => void;
};

const BrandContext = createContext<BrandContextValue | null>(null);

const STORE_CURRENT = "brand-lab-current";
const STORE_FINAL = "brand-direction";

function applyBrandToDom(b: BrandId) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.brand = b;
  updateFavicon(b);
}

function updateFavicon(b: BrandId) {
  if (typeof document === "undefined") return;
  const hex = brands[b].accentHex;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}"><rect width="100" height="100" rx="22" fill="#11120F"/><g transform="translate(0,0)" style="color:${hex}">${MARK_GLYPHS[b]}</g></svg>`;
  const uri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = uri;
}

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrandState] = useState<BrandId>("apricot");
  const [finalized, setFinalized] = useState<BrandId | null>(null);

  useEffect(() => {
    let initial: BrandId = "apricot";
    let fin: BrandId | null = null;
    try {
      const stored = sessionStorage.getItem(STORE_CURRENT);
      if (stored && brandOrder.includes(stored as BrandId)) initial = stored as BrandId;
      const finStored = sessionStorage.getItem(STORE_FINAL);
      if (finStored && brandOrder.includes(finStored as BrandId)) fin = finStored as BrandId;
    } catch {}
    setBrandState(fin ?? initial);
    setFinalized(fin);
    applyBrandToDom(fin ?? initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setBrand = useCallback((b: BrandId) => {
    setBrandState(b);
    try {
      sessionStorage.setItem(STORE_CURRENT, b);
    } catch {}
    applyBrandToDom(b);
  }, []);

  const finalize = useCallback((b: BrandId) => {
    setBrandState(b);
    setFinalized(b);
    try {
      sessionStorage.setItem(STORE_FINAL, b);
      sessionStorage.setItem(STORE_CURRENT, b);
    } catch {}
    applyBrandToDom(b);
  }, []);

  const exitFinalized = useCallback(() => {
    setFinalized(null);
    try {
      sessionStorage.removeItem(STORE_FINAL);
    } catch {}
  }, []);

  return (
    <BrandContext.Provider
      value={{
        brand,
        finalized,
        preview: finalized === null,
        setBrand,
        finalize,
        exitFinalized,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within BrandProvider");
  return ctx;
}
