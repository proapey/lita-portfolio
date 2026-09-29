import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./primitives";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index]!;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="Testimonials" title="What colleagues and mentors say" />

      <div className="relative mx-auto mt-12 max-w-3xl">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <Quote className="size-8 text-primary/30" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mt-5 text-lg leading-relaxed sm:text-xl">{item.quote}</p>
              <footer className="mt-7">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-9 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-10 place-items-center rounded-xl border border-border bg-background transition-colors hover:bg-accent"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-10 place-items-center rounded-xl border border-border bg-background transition-colors hover:bg-accent"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
