import Image from "next/image";
import { whoIHelp } from "@/lib/content";
import { Container, Rich, bodyClass, h2Class } from "./ui";

export function WhoIHelp() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <h2 className={`${h2Class} max-w-2xl text-primary`}>
          <Rich parts={whoIHelp.h2} />
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {whoIHelp.items.map((item) => (
            <article key={item.title}>
              <Image
                src={item.image}
                alt={item.alt}
                width={500}
                height={625}
                sizes="(min-width: 768px) 360px, 100vw"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <h3 className="mt-7 text-2xl text-primary">{item.title}</h3>
              <p className={`mt-3 ${bodyClass}`}>{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
