import Image from "next/image";
import { Armchair, MapPin, ShieldCheck, Sun, Video } from "lucide-react";
import { fullAddress, mapsUrl, office } from "@/lib/content";
import { Container, Rich, bodyClass, h2Class } from "./ui";

const icons = { sun: Sun, lock: ShieldCheck, sofa: Armchair, video: Video } as const;

export function OurOffice() {
  const [main, second, third] = office.images;
  return (
    <section id="office" className="bg-mist py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className={`${h2Class} text-primary`}>
              <Rich parts={office.h2} />
            </h2>
            <p className={`mt-6 ${bodyClass}`}>{office.p1}</p>
            <p className={`mt-4 ${bodyClass}`}>{office.p2}</p>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {office.details.map((d) => {
                const Icon = icons[d.icon as keyof typeof icons];
                return (
                  <li key={d.label} className="flex items-center gap-3 text-ink">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {d.label}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex items-start gap-3 border-t border-primary/15 pt-6">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <address className="not-italic text-ink">{fullAddress}</address>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block border-b border-accent text-[0.95rem] font-medium text-accent hover:border-primary hover:text-primary"
                >
                  {office.directions}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[520px]">
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-5 md:aspect-auto">
            <Image src={second.src} alt={second.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-5 md:aspect-auto">
            <Image src={third.src} alt={third.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
