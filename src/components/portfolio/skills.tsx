import { Briefcase, MonitorSmartphone, Users } from "lucide-react";
import { motion } from "motion/react";
import { languages, skillGroups } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./primitives";

const icons = { Users, MonitorSmartphone, Briefcase } as const;

function Ring({ value, name, level }: { value: number; name: string; level: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-28">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r={r} fill="none" strokeWidth="8" className="stroke-muted" />
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className="stroke-primary"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-sm font-semibold">
          {value}%
        </span>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{level}</p>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/40">
      <SectionHeading eyebrow="Skills" title="Leadership, technology, and professional practice" />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.name} delay={gi * 0.1}>
              <article className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.name}</h3>
                </div>
                <ul className="mt-6 space-y-5">
                  {group.skills.map((skill) => (
                    <li key={skill.label}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="font-medium">{skill.label}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-24">
        <SectionHeading
          eyebrow="Languages"
          title="Six languages across study, work, and advocacy"
        />
        <Reveal
          delay={0.1}
          className="mt-12 grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft sm:grid-cols-3 lg:grid-cols-6"
        >
          {languages.map((lang) => (
            <Ring key={lang.name} value={lang.value} name={lang.name} level={lang.level} />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
