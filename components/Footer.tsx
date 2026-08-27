import { profile } from "@/lib/content";
import BrandMark from "./BrandMark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-content flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <BrandMark size={26} className="text-accent" />
          <p className="text-sm text-muted">
            © {year} {profile.name}. Built as a product, not just a portfolio.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accentSoft"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accentSoft"
          >
            LinkedIn
          </a>
          <a href="/brand-bible" className="transition-colors hover:text-accentSoft">
            Brand Bible
          </a>
        </div>
      </div>
    </footer>
  );
}
