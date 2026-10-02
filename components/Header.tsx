"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";
import { Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-40 border-b border-primary/10 bg-mist">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 py-6 text-[0.95rem] text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  )}
                </a>
                {item.children && (
                  <ul className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 border border-primary/10 bg-paper py-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="block px-5 py-2.5 text-[0.92rem] text-ink hover:bg-sage"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-primary/10 bg-mist lg:hidden"
        >
          <Container className="py-4">
            <ul>
              {nav.map((item) => (
                <li key={item.label} className="border-b border-primary/10 last:border-0">
                  <a
                    href={item.href}
                    onClick={close}
                    className="block py-4 font-display text-xl text-primary"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="pb-3 pl-4">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href}
                            onClick={close}
                            className="block py-2 text-[0.95rem] text-muted"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
