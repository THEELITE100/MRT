export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  title: "Licensed Clinical Psychologist",
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    region: "CA",
    zip: "90401",
  },

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "reynoldmaya@gmail.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+1 7548610560",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
export const bookingHref = site.contact.email
  ? `mailto:${site.contact.email}?subject=Appointment%20request`
  : "#book";

export const seo = {
  title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica, CA. Dr. Maya Reynolds, PsyD offers anxiety, trauma, EMDR and burnout therapy for adults, in person or online.",
};

export const nav = [
  { label: "About", href: "#about" },
  {
    label: "Specialties",
    href: "#specialties",
    children: [
      { label: "Anxiety & panic therapy", href: "#anxiety" },
      { label: "Trauma therapy & EMDR", href: "#trauma" },
      { label: "Burnout & perfectionism", href: "#burnout" },
    ],
  },
  {
    label: "Approach",
    href: "#approach",
    children: [
      { label: "Cognitive behavioral therapy", href: "#approach" },
      { label: "EMDR", href: "#approach" },
      { label: "Mindfulness based practices", href: "#approach" },
      { label: "Body oriented techniques", href: "#approach" },
    ],
  },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#book" },
];

export const hero = {
  eyebrow: "In-person in Santa Monica and online across California",
  h1: {
    before: "Anxiety & trauma therapy in Santa Monica, CA to help you feel ",
    emphasis: "steady",
    after: " again.",
  },
  sub: "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist who helps thoughtful, high achieving adults move from overthinking and exhaustion toward calm, resilience, and a stronger relationship with themselves.",
  cta: "Book an Appointment",
};

export const intro = {
  h2: "You look like you’re handling everything. Inside, you may be running on empty.",
  lead: "Therapy can be the place where you finally slow down.",
  p1: "Many of the adults I work with are thoughtful, high achieving, and self aware, yet they feel exhausted, stuck in overthinking, or emotionally on edge. On the outside they’re functioning. On the inside there may be constant worry, tension in the body, trouble sleeping, or a feeling that they’re always bracing for something to go wrong.",
  p2: "If that sounds familiar, you don’t have to keep pushing through alone. Together we’ll look at both the emotional and the physical sides of what you’re experiencing, so you can feel more at ease in daily life, not only during sessions.",
};

export const whoIHelp = {
  h2: { before: "Therapy for adults with anxiety, trauma & ", emphasis: "burnout" },
  items: [
    {
      title: "Adults with anxiety & panic",
      image: "/images/help-chair.jpg",
      alt: "A soft armchair with a draped throw beside a sunlit window in the Santa Monica therapy office",
      body: "Constant worry, overthinking, tension in your body, or difficulty sleeping can make even a good day feel like a fight. I help you understand both the emotional and physical sides of anxiety and panic, and build practical tools that work in real life.",
    },
    {
      title: "Adults healing from trauma",
      image: "/images/help-olive.jpg",
      alt: "An olive tree beside a gray sofa and a framed coastal print in the therapy office",
      body: "Whether you’re carrying a single incident trauma or long standing patterns rooted in childhood, relationships, or chronic stress, we’ll move at a careful pace, with safety and stabilization first, so the past has less say over your relationships, confidence, and sense of safety.",
    },
    {
      title: "Professionals facing burnout",
      image: "/images/help-lounge.jpg",
      alt: "A glass and marble coffee table with a small plant in front of a gray sofa",
      body: "Entrepreneurs, creatives, and professionals often feel disconnected from themselves after years of pushing through stress. Therapy can be a space to ease perfectionism and high internal pressure, and to build more sustainable ways of living and working.",
    },
  ],
};

export const statement = {
  h2: "You deserve a space where you can slow down, feel understood, and reconnect with yourself.",
  expertiseLabel: "Areas of expertise",
  expertise: [
    "Anxiety",
    "Panic",
    "Traumas",
    "Burnout",
    "Perfectionism",
    "Overthinking",
    "High internal pressure",
    "Stress",
    "Confidence and sense of safety",
  ],
};

export const about = {
  eyebrow: "About Dr. Maya Reynolds",
  h2: { before: "A warm, collaborative, and ", emphasis: "grounded", after: " approach to therapy" },
  intro:
    "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
  lead: "Sessions are structured enough to feel supportive, with space left for reflection and depth.",
  p1: "I believe therapy works best when you feel respected, understood, and actively involved in the process. I integrate evidence based methods to help you understand both the emotional and physiological sides of what you’re experiencing.",
  p2: "My goal is not just symptom relief. It’s helping you develop insight, resilience, and a stronger relationship with yourself over time. If you’re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast paced environment, I may be a good fit.",
  methodsLabel: "Methods I use",
  methods: [
    "Cognitive behavioral therapy (CBT)",
    "EMDR",
    "Mindfulness based practices",
    "Body oriented techniques",
  ],
  photo: "/images/maya-reynolds.jpg",
  photoAlt: "Portrait of Dr. Maya Reynolds, PsyD, a licensed clinical psychologist in Santa Monica",
  cta: "Book an Appointment",
};

export const services = {
  h2: { before: "Anxiety, trauma & burnout therapy in ", emphasis: "Santa Monica" },
  sub: "Where I focus my work with adults in Santa Monica and across California.",
  cta: "Get started",
  items: [
    {
      id: "anxiety",
      title: "Anxiety & Panic Therapy",
      body: "For adults who feel “functional” on the outside while quietly struggling with constant worry, tension in the body, difficulty sleeping, or the sense that something is about to go wrong. We’ll draw on CBT, mindfulness based practices, and body oriented techniques to ease both your thoughts and your body’s stress response.",
    },
    {
      id: "trauma",
      title: "Trauma Therapy & EMDR",
      body: "Trauma work is an important part of my practice. I support adults with single incident trauma as well as complex, long standing patterns from childhood, relationships, or chronic stress, using EMDR and other evidence based methods. The pace is careful, with an emphasis on safety, stabilization, and feeling more regulated day to day.",
    },
    {
      id: "burnout",
      title: "Burnout & Perfectionism Counseling",
      body: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working, with less internal pressure.",
    },
  ],
};

export const office = {
  h2: { before: "A calm, private therapy office in ", emphasis: "Santa Monica" },
  p1: "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
  p2: "I offer in-person therapy at my Santa Monica office and secure telehealth sessions for clients located in California.",
  details: [
    { icon: "sun", label: "Natural light" },
    { icon: "lock", label: "Quiet and private" },
    { icon: "sofa", label: "Comfortable and uncluttered" },
    { icon: "video", label: "In person or secure telehealth" },
  ],
  directions: "Get directions",
  images: [
    {
      src: "/images/office-sunlit-full.jpg",
      alt: "Sunlit therapy room in Santa Monica with brick walls, tall windows, a gray sofa and a cream swivel chair",
    },
    {
      src: "/images/office-olive-full.jpg",
      alt: "Therapy office with an olive tree, sheer white curtains, a gray sofa, a leather armchair and a built-in bookshelf",
    },
    {
      src: "/images/detail-table.jpg",
      alt: "Round marble coffee table with a tissue box between the sofa and armchair",
    },
  ],
};

export const faqs = {
  h2: { before: "Questions about therapy in ", emphasis: "Santa Monica" },
  sub: "Answers to a few things people often wonder before reaching out.",
  items: [
    {
      q: "Who do you work with?",
      a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high achieving, thoughtful, and self aware, but feel exhausted, stuck in overthinking, or emotionally on edge.",
    },
    {
      q: "Do you offer in-person and online therapy?",
      a: "Yes. I see clients in person at my Santa Monica office and offer secure telehealth sessions for clients located in California.",
    },
    {
      q: "What kinds of therapy do you use?",
      a: "I integrate evidence based methods such as cognitive behavioral therapy, EMDR, mindfulness based practices, and body oriented techniques, so we can address both the emotional and physiological sides of what you’re experiencing.",
    },
    {
      q: "How do you approach trauma therapy?",
      a: "I work with single incident trauma as well as complex, long standing patterns. The pace is careful, with an emphasis on safety and stabilization, and on helping you feel more regulated in daily life, not just during sessions.",
    },
    {
      q: "I seem fine on the outside. Is therapy right for me?",
      a: "Many of the people I work with feel “functional” while quietly struggling with constant worry, tension in the body, or trouble sleeping. If you’re tired of holding it all together, therapy can be a space to slow down and reconnect.",
    },
    {
      q: "What can I expect from sessions?",
      a: "Sessions are structured enough to feel supportive while leaving space for reflection and depth. I take a warm, collaborative, and grounded approach, and I want you to feel respected, understood, and actively involved.",
    },
    {
      q: "Where is your office?",
      a: `My office is at ${fullAddress}. It’s a quiet, private space with natural light.`,
    },
  ],
};

export const cta = {
  eyebrow: "Schedule an appointment",
  h2: { before: "See if we’re a good ", emphasis: "fit", after: "." },
  body: "Reaching out can feel like a big step, especially if you’re used to handling everything yourself. Whether you’re looking for anxiety therapy, trauma therapy with EMDR, or support with burnout, I offer sessions in person in Santa Monica and by secure telehealth anywhere in California.",
  button: "Book an Appointment",
  image: "/images/office-olive-full.jpg",
  imageAlt: "An olive tree, gray sofa and coastal print in the calm Santa Monica therapy office",
};

export const footer = {
  blurb:
    "Anxiety, trauma, and burnout therapy for adults in Santa Monica, CA, in person or by secure telehealth across California.",
  service:
    "In-person sessions in Santa Monica, CA 90401. Secure telehealth for clients located anywhere in California.",
  legal: "Demo website. Dr. Maya Reynolds is a fictional therapist.",
};
