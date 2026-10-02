import Image from "next/image";
import { about, bookingHref } from "@/lib/content";
import { Button, Container, Eyebrow, Rich, bodyClass, h2Class } from "./ui";

export function About() {
  return (
    <section id="about" className="bg-mist py-20 md:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <Image
              src={about.photo}
              alt={about.photoAlt}
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 460px, 90vw"
              className="aspect-[4/5] w-full rounded-t-full object-cover object-top"
            />
            <div className="mt-5 border-l-2 border-accent pl-4">
              <p className="font-display text-2xl text-primary">Dr. Maya Reynolds, PsyD</p>
              <p className="text-sm text-muted">
                Licensed Clinical Psychologist · Santa Monica, CA
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className={`${h2Class} mt-4 text-primary`}>
            <Rich parts={about.h2} />
          </h2>
          <p className="mt-6 font-display text-2xl italic leading-snug text-accent">
            {about.lead}
          </p>
          <p className={`mt-6 ${bodyClass}`}>{about.intro}</p>
          <p className={`mt-5 ${bodyClass}`}>{about.p1}</p>

          <div id="approach" className="mt-8">
            <h3 className="text-lg font-sans font-medium text-primary">{about.methodsLabel}</h3>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {about.methods.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-primary/25 bg-paper px-4 py-2 text-[0.92rem] text-primary"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <p className={`mt-8 ${bodyClass}`}>{about.p2}</p>
          <div className="mt-9">
            <Button href={bookingHref}>{about.cta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
