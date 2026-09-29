import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { Gallery } from "@/components/portfolio/gallery";
import { Hero } from "@/components/portfolio/hero";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { ScrollToTop } from "@/components/portfolio/scroll-to-top";
import { Skills } from "@/components/portfolio/skills";
import { Testimonials } from "@/components/portfolio/testimonials";

const title = "Solita Thearos — Youth Leader, Educator & BIT Student";
const description =
  "Portfolio of Solita Thearos: Business Information Technology and Business Administration student from Cambodia, youth leader, Chinese teacher, and community advocate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Solita Thearos",
          jobTitle: "Youth Leader, Educator & Community Advocate",
          email: "mailto:solitathearos@gmail.com",
          telephone: "+85585629",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Meanchey, Phnom Penh",
            addressCountry: "KH",
          },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Limkokwing University" },
            { "@type": "CollegeOrUniversity", name: "Paragon International University" },
          ],
          knowsLanguage: ["Khmer", "English", "Chinese", "Thai", "Korean", "Indonesian"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
