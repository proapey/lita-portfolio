import gTeaching from "@/assets/g-teaching.jpg";
import gSpeaking from "@/assets/p-speaking.jpg";
import gWorkshop from "@/assets/g-workshop.jpg";
import gVolunteer from "@/assets/g-volunteer.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

const photos = [
  { src: gWorkshop, alt: "Moderating a workshop", caption: "MC" },
  { src: gSpeaking, alt: "Presenting at an event", caption: "Embassy Visit" },
  { src: gTeaching, alt: "Shooting for educational content", caption: "Shooting" },
  {
    src: gVolunteer,
    alt: "Representing Cambodia on international stage",
    caption: "Volunteer activities",
  },
];

export function Gallery() {
  return (
    <Section id="gallery" className="bg-muted/40">
      <SectionHeading eyebrow="Gallery" title="Moments from classrooms, stages, and communities" />
      <Reveal delay={0.08} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {photos.map((photo, i) => (
          <figure
            key={`${photo.caption}-${i}`}
            className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="glass absolute bottom-3 left-3 rounded-full px-3.5 py-1.5 text-xs font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </Section>
  );
}
