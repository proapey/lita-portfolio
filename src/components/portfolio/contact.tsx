import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { profile } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/solita-thearos-0a2490369/",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/solitaasotaaa", Icon: Github },
  { label: "Facebook", href: "https://web.facebook.com/so.taa.98/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/___sotaaa___/", Icon: Instagram },
];

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    const { subject, name, message, email } = parsed.data;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    toast.success("Opening your email client…");
    form.reset();
  };

  const field =
    "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";

  return (
    <Section id="contact" className="bg-muted/40">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about programmes, projects, or opportunities"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-4">
          {details.map(({ label, value, href, Icon }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="mt-1 block text-sm font-medium hover:text-primary">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Social
            </p>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-2xl border border-border bg-background transition-colors hover:bg-accent"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" maxLength={100} className={field} />
                {errors["name"] ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input id="email" name="email" type="email" maxLength={255} className={field} />
                {errors["email"] ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input id="subject" name="subject" maxLength={150} className={field} />
              {errors["subject"] ? (
                <p className="mt-1.5 text-xs text-destructive">{errors["subject"]}</p>
              ) : null}
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" rows={5} maxLength={1000} className={field} />
              {errors["message"] ? (
                <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" />
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
