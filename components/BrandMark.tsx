"use client";

import { useBrand } from "./BrandProvider";
import { brands, type BrandId } from "@/lib/content";
import { MARK_GLYPHS, MARK_VIEWBOX } from "@/lib/marks";

export default function BrandMark({
  brand: forced,
  size = 28,
  className = "",
}: {
  brand?: BrandId;
  size?: number;
  className?: string;
}) {
  const { brand } = useBrand();
  const id = forced ?? brand;
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      width={size}
      height={size}
      role="img"
      aria-label={`${brands[id].name} mark`}
      className={className}
      dangerouslySetInnerHTML={{ __html: MARK_GLYPHS[id] }}
    />
  );
}
