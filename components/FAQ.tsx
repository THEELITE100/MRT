import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Container, Rich, bodyClass, h2Class } from "./ui";

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className={`${h2Class} text-primary`}>
            <Rich parts={faqs.h2} />
          </h2>
          <p className={`mt-5 ${bodyClass}`}>{faqs.sub}</p>
        </div>
        <div className="lg:col-span-8">
          {faqs.items.map((f) => (
            <details key={f.q} className="group border-b border-primary/20 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl text-primary marker:hidden [&::-webkit-details-marker]:hidden md:text-2xl">
                {f.q}
                <Plus
                  className="h-6 w-6 shrink-0 text-accent transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className={`max-w-2xl pb-7 ${bodyClass}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
