import Image from "next/image";
import { bookingHref, hero } from "@/lib/content";
import { Button, Container, Eyebrow, bodyClass } from "./ui";

export function Hero() {
  return (
    <section id="top" className="bg-mist pb-16 pt-10 md:pb-24 md:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[2.5rem] leading-[1.06] text-primary sm:text-5xl lg:text-[3.6rem]">
            {hero.h1.before}
            <em className="italic">{hero.h1.emphasis}</em>
            {hero.h1.after}
          </h1>
          <p className={`mt-6 max-w-xl ${bodyClass} text-lg`}>{hero.sub}</p>
          <div className="mt-9">
            <Button href={bookingHref}>{hero.cta}</Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="grid grid-cols-12 items-end gap-4 md:gap-6">
            <div className="col-span-7">
              <Image
                src="/images/hero-window.jpg"
                alt="Tall sunlit windows and exposed brick in Dr. Reynolds' Santa Monica therapy office"
                width={440}
                height={640}
                priority
                sizes="(min-width: 1024px) 340px, 55vw"
                className="aspect-[11/16] w-full rounded-t-full object-cover"
              />
            </div>
            <div className="col-span-5">
              <Image
                src="/images/hero-shelf.jpg"
                alt="A styled bookshelf with books, plants and a teal vase in the therapy office"
                width={540}
                height={600}
                priority
                sizes="(min-width: 1024px) 250px, 40vw"
                className="aspect-[9/10] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
