import { Award, BadgeCheck, Code2, GraduationCap, Languages, Mic, Palette, Trophy } from "lucide-react";
import { achievements, certifications, degrees, otherEducation } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./primitives";

const icons = { Palette, Code2, Mic, Languages, BadgeCheck } as const;

export function Education() {
  const orderedEducation = [...otherEducation].sort((a, b) => b.sortYear - a.sortYear);
  const orderedAchievements = [...achievements].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Two degrees, one continuous learning habit" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {degrees.map((d, i) => (
          <Reveal key={d.degree} delay={i * 0.1}>
            <article className="lift h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <GraduationCap className="size-7 text-primary" />
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-foreground dark:text-gold">
                  {d.period}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{d.degree}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {d.level}, {d.school}
              </p>
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                CGPA <span className="text-2xl font-semibold text-primary">{d.cgpa}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-soft">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Other education
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {orderedEducation.map((item) => (
            <li
              key={`${item.programme}-${item.school}`}
              className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-secondary p-4"
            >
              <span>
                <span className="block text-sm font-semibold text-secondary-foreground">{item.programme}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.school}</span>
              </span>
              <span className="shrink-0 text-xs font-semibold text-primary">{item.period}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-24">
        <SectionHeading eyebrow="Achievements" title="Recognition across academics and advocacy" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {orderedAchievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <article className="lift flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold-foreground dark:text-gold">
                  {i % 2 === 0 ? <Trophy className="size-5" /> : <Award className="size-5" />}
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.year}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
