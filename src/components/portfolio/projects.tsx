import { ArrowUpRight } from "lucide-react";
import pPhsarBot from "@/assets/p-phsarbot.jpg";
import pVivoat from "@/assets/p-vivoat.png";
import pReStyle from "@/assets/p-restyle.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

const projects = [
  {
    title: "ReStyle",
    image: pReStyle,
    description:
      "A secondhand fashion marketplace designed to make buying and selling pre-loved clothing simple, secure, and sustainable.",
    tech: ["Figma", "UX/UI", "Prototyping"],
    link: "https://www.figma.com/proto/nNP74j9Nca30GFsuI63T66/ReStyle?node-id=1141-1271&t=Fpj7lvZ2LSHibKmk-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=987%3A3129",
  },
  {
    title: "Vivoat",
    image: pVivoat,
    description:
      "A student-focused platform that helps users discover and choose courses based on their interests, goals, and learning needs.",
    tech: ["Web Development", "UX/UI", "JavaScript"],
    link: "https://vivoat-class-demo.leakproapeysam.workers.dev/#",
  },
  {
    title: "Phsar Bot",
    image: pPhsarBot,
    description:
      "A Telegram-based ordering platform designed to help retailers easily browse baby products, place wholesale orders, and receive personalized product updates.",
    tech: ["Telegram Bot", "UX/UI", "Digital Commerce"],
    link: "https://t.me/PhsarKHBot",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected work across design, technology, and community"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <article className="group lift flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  View project
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
