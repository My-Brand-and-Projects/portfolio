import Reveal from "./Reveal";
import { contact, profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon, InstaIcon } from "./icons";

export default function Contact() {
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
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <InstaIcon className="h-4 w-4" />
                {contact.buttons.instagram}
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary">
                {contact.buttons.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
