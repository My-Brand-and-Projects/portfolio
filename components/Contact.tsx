import Reveal from "./Reveal";
import { contact, profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const hasEmail = Boolean((profile as any).email);
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">{contact.heading}</h2>
            <p className="prose-copy mt-4">{contact.copy}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <LinkedinIcon className="h-4 w-4" />
                {contact.buttons.linkedin}
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon className="h-4 w-4" />
                {contact.buttons.github}
              </a>
              {hasEmail ? (
                <a href={`mailto:${(profile as any).email}`} className="btn-secondary">
                  {contact.buttons.email}
                </a>
              ) : (
                <span className="chip">
                  Email available on{" "}
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    LinkedIn
                  </a>
                </span>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
