import { motion } from "motion/react";
import { experience } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./primitives";

export function Experience() {
  const orderedExperience = [...experience].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <Section id="experience" className="bg-muted/40">
      <SectionHeading
        eyebrow="Leadership & work"
        title="A timeline of teaching, mentoring, and representation"
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div aria-hidden className="absolute left-[15px] top-2 h-full w-px bg-border sm:left-1/2" />
        <ol className="space-y-8">
          {orderedExperience.map((item, i) => (
            <motion.li
              key={`${item.title}-${item.org}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-11 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0"
            >
              <span
                aria-hidden
                className="absolute left-2 top-6 size-3 rounded-full bg-primary ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2"
              />
              <div
                className={
                  i % 2 === 0 ? "sm:col-start-1 sm:pr-2 sm:text-right" : "sm:col-start-2 sm:pl-2"
                }
              >
                <div className="lift rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {item.period}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{item.org}</p>
                  {item.points.length ? (
                    <ul
                      className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${
                        i % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
