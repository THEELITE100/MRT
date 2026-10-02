import { faqs, fullAddress, seo, site } from "@/lib/content";

export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: site.name,
    description: seo.description,
    url: site.url,
    image: `${site.url}/images/office-sunlit-full.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Santa Monica, CA" },
      { "@type": "State", name: "California" },
    ],
    knowsAbout: [
      "Anxiety therapy",
      "Panic",
      "Trauma therapy",
      "EMDR",
      "Cognitive behavioral therapy",
      "Mindfulness based therapy",
      "Burnout",
      "Perfectionism",
    ],
    employee: {
      "@type": "Person",
      name: "Dr. Maya Reynolds",
      honorificSuffix: "PsyD",
      jobTitle: site.title,
    },
    ...(site.contact.email && { email: site.contact.email }),
    ...(site.contact.phone && { telephone: site.contact.phone }),
    location: fullAddress,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, faq]) }}
    />
  );
}
