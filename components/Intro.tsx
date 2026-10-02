import Image from "next/image";
import { intro } from "@/lib/content";
import { Container, bodyClass, h2Class } from "./ui";

export function Intro() {
  return (
    <section className="bg-mist pb-20 md:pb-28">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className={`${h2Class} text-primary`}>{intro.h2}</h2>
          <p className="mt-6 font-display text-2xl italic leading-snug text-accent">
            {intro.lead}
          </p>
          <p className={`mt-6 ${bodyClass}`}>{intro.p1}</p>
        </div>
        <div className="lg:col-span-7">
          <Image
            src="/images/intro-triptych.jpg"
            alt="A gray sofa beneath three soft blue and blush abstract paintings in the therapy office"
            width={920}
            height={690}
            sizes="(min-width: 1024px) 660px, 100vw"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <p className={`mt-8 ${bodyClass}`}>{intro.p2}</p>
        </div>
      </Container>
    </section>
  );
}
