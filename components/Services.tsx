import { bookingHref, services } from "@/lib/content";
import { Container, Rich, bodyClass, h2Class } from "./ui";

export function Services() {
  return (
    <section id="specialties" className="bg-paper py-20 md:py-28">
      <Container>
        <h2 className={`${h2Class} max-w-3xl text-primary`}>
          <Rich parts={services.h2} />
        </h2>
        <p className="mt-4 font-display text-2xl italic text-accent">{services.sub}</p>

        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {services.items.map((s) => (
            <article key={s.id} id={s.id} className="flex flex-col border-t-2 border-primary pt-6">
              <h3 className="text-[1.65rem] leading-tight text-primary md:min-h-[3.6rem]">{s.title}</h3>
              <p className={`mt-4 mb-6 ${bodyClass}`}>{s.body}</p>
              <a
                href={bookingHref}
                className="mt-auto self-start border-b border-accent pb-0.5 text-[0.95rem] font-medium text-accent transition-colors hover:text-primary hover:border-primary"
              >
                {services.cta}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
