import { profile } from "@/lib/portfolio-data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              ST
            </span>
            <span className="font-semibold">{profile.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {profile.tagline.join(" • ")} — building learning, leadership, and community impact
            from Phnom Penh, Cambodia.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted-foreground hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
