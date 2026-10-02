import { fullAddress, footer, mapsUrl, nav, site } from "@/lib/content";
import { Logo } from "./Logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-primary-dark pt-16 text-paper/85">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed">{footer.blurb}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-paper/60">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-paper hover:underline underline-offset-4">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-paper/60">
              Contact
            </h2>
            <address className="mt-4 space-y-2.5 not-italic">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-paper hover:underline underline-offset-4">
                {fullAddress}
              </a>
              {site.contact.email && (
                <a href={`mailto:${site.contact.email}`} className="block hover:text-paper hover:underline underline-offset-4">
                  {site.contact.email}
                </a>
              )}
              {site.contact.phone && (
                <a href={`tel:${site.contact.phone}`} className="block hover:text-paper hover:underline underline-offset-4">
                  {site.contact.phone}
                </a>
              )}
            </address>
            <p className="mt-5 text-sm leading-relaxed text-paper/70">{footer.service}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 py-6 text-sm text-paper/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{footer.legal}</p>
        </div>
      </Container>
    </footer>
  );
}
