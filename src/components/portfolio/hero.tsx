import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, GraduationCap, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile, stats } from "@/lib/portfolio-data";
import { Counter } from "./primitives";

function Typewriter({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words.join(" • "));
      return;
    }
    const word = words[index % words.length] ?? "";
    const delay = deleting ? 45 : text === word ? 1400 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce]);

  return (
    <span className="text-primary">
      {text}
      <span className="caret ml-0.5 inline-block w-[2px] translate-y-[2px] bg-primary align-middle text-transparent">
        |
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-aurora relative overflow-hidden px-5 pb-16 pt-32 sm:pt-40">
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="float-slower pointer-events-none absolute -right-16 top-48 size-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-soft"
          >
            <Sparkles className="size-3.5" />
            Open to fellowships & internships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-5 max-w-xl text-lg text-muted-foreground"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-2 text-lg font-semibold sm:text-xl"
          >
            <Typewriter words={[...profile.tagline]} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="src/assets/Solita-Thearos-CV.pdf.pdf"
              download="src/assets/Solita-Thearos-CV.pdf.pdf"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              View Portfolio
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.08 }}
                className="glass rounded-2xl p-4 shadow-soft"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-primary">
                  {stat.display ?? <Counter to={stat.value} suffix={stat.suffix} />}
                </dd>
                <dd className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute inset-x-6 -bottom-6 h-24 rounded-[2.5rem] bg-primary/20 blur-2xl"
            aria-hidden
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-lift">
            <img
              src={portrait}
              alt="Portrait of Solita Thearos"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="glass float-slow absolute -left-4 bottom-10 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-soft">
            <GraduationCap className="size-4 text-primary" />
            <span className="text-xs font-semibold">CGPA 4.00</span>
          </div>
          <div className="glass float-slower absolute -right-2 top-10 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-soft">
            <span className="text-xs font-semibold text-gold">🇰🇭 Cambodia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
