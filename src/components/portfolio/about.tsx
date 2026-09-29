import { Quote } from "lucide-react";
import { profile, quickFacts } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title="Learning, leading, and building for community impact"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="relative rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
          <Quote className="size-8 text-primary/30" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-7 h-px w-full bg-border" />
          <p className="mt-5 text-sm font-medium text-navy dark:text-primary">
            Currently mentoring youth at AusCam Freedom Project while studying two bachelor
            programmes in Phnom Penh.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <div
              key={fact.text}
              className="lift flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <span aria-hidden className="text-xl">
                {fact.icon}
              </span>
              <span className="text-sm font-medium">{fact.text}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
