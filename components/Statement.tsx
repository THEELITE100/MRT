import Image from "next/image";
import { statement } from "@/lib/content";
import { Container } from "./ui";

export function Statement() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark py-20 text-paper md:py-28">
      <Image
        src="/images/band-brick.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-55"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/35"
        aria-hidden="true"
      />
      <Container>
        <h2 className="max-w-3xl text-[2rem] leading-[1.12] md:text-5xl">
          {statement.h2}
        </h2>
        <h3 className="mt-16 text-lg font-sans font-medium tracking-wide text-paper/80">
          {statement.expertiseLabel}
        </h3>
        <ul className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {statement.expertise.map((item) => (
            <li
              key={item}
              className="border-t border-paper/25 py-4 font-display text-2xl italic"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
