import Image from "next/image";
import { bookingHref, cta, fullAddress, site } from "@/lib/content";
import { Button, Container, Eyebrow, Rich, bodyClass, h2Class } from "./ui";

export function BookCTA() {
  return (
    <section id="book" className="bg-sage py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Eyebrow>{cta.eyebrow}</Eyebrow>
          <h2 className={`${h2Class} mt-4 text-primary`}>
            <Rich parts={cta.h2} />
          </h2>
          <p className={`mt-6 ${bodyClass} text-ink/80`}>{cta.body}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={bookingHref}>{cta.button}</Button>
            {site.contact.phone && (
              <a href={`tel:${site.contact.phone}`} className="font-display text-2xl text-primary">
                {site.contact.phone}
              </a>
            )}
          </div>
          <p className="mt-6 text-sm text-muted">{fullAddress}</p>
        </div>
        <div className="lg:col-span-6">
          <Image
            src={cta.image}
            alt={cta.imageAlt}
            width={1500}
            height={1125}
            sizes="(min-width: 1024px) 460px, 85vw"
            className="mx-auto aspect-[4/5] w-full max-w-md rounded-t-full object-cover object-[28%_50%] lg:ml-auto lg:mr-0"
          />
        </div>
      </Container>
    </section>
  );
}
