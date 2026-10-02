# Dr. Maya Reynolds, PsyD | Therapy Practice Website

A responsive, SEO-optimized homepage for a Santa Monica clinical psychologist, built with **Next.js** and **Tailwind CSS**.

The layout and section order are modeled on an existing counseling-practice template. The theme, copy, and imagery are rebuilt from scratch around a single practitioner profile: a calm, warm, trustworthy presence for adults seeking help with anxiety, trauma, and burnout.

> **Note:** Dr. Maya Reynolds is a fictional therapist. This is a demonstration project, and the address, credentials, and practice details are illustrative.

**Live site:** [your-deployment.vercel.app](https://your-deployment.vercel.app)  ·  


## Overview

Therapy websites do one job well or not at all: they help a nervous first-time visitor feel safe enough to reach out. This project focuses on that moment.

- **Clear positioning** in the first screen: who the practice helps, where it is, and what to do next.
- **Warm, human design** drawn from the real office: arched windows, exposed brick, olive greens, and soft grays.
- **Local search visibility** through keyword-aware headings, structured data, and a dedicated office section.
- **Content that stays editable.** All copy lives in one typed file, separate from the components that render it.

## Features

- Fully responsive layout across mobile, tablet, and desktop
- Desktop navigation with dropdown menus; accessible slide-down menu on mobile
- Hero, introduction, client groups, expertise list, bio, three services, office gallery, FAQ, and booking sections
- **Our Office** section with photography, privacy and comfort details, address, and a directions link
- Native, JavaScript-free FAQ accordion
- Optimized images via `next/image`, with all photography cropped from supplied source files
- Self-hosted fonts, with no third-party font requests
- Theme tokens defined once and consumed everywhere through Tailwind utilities
- JSON-LD structured data (`LocalBusiness` and `FAQPage`)
- Static prerendering for fast loads and simple hosting

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | [React](https://react.dev/) 19 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (CSS-first `@theme` tokens) |
| Language | TypeScript 5 |
| Icons | [lucide-react](https://lucide.dev/) |
| Typography | [Newsreader](https://fontsource.org/fonts/newsreader) (headings) and [Hanken Grotesk](https://fontsource.org/fonts/hanken-grotesk) (body), via Fontsource |

## Page Structure

The homepage follows the section order of the source template, with two deliberate additions.

| # | Section | Purpose |
| --- | --- | --- |
| 1 | Header | Logo and navigation with Specialties and Approach dropdowns |
| 2 | Hero | Keyword-rich H1, supporting statement, primary call to action |
| 3 | Introduction | Speaks to the "functional on the outside, exhausted inside" experience |
| 4 | Who I Help | Three client groups: anxiety and panic, trauma, burnout |
| 5 | Statement and Expertise | Reassurance, plus a list of areas of expertise |
| 6 | About | Portrait, bio, and the methods used (CBT, EMDR, mindfulness-based, body-oriented) |
| 7 | Services | Three services with descriptions |
| 8 | **Our Office** *(new)* | The physical space, in-person and telehealth availability, address |
| 9 | **FAQ** *(added)* | Seven questions answered from the practice profile |
| 10 | Booking CTA | Final call to action and location |
| 11 | Footer | Navigation, address, service area |


## Content & SEO

All copy is derived from the practitioner's profile and kept in [`lib/content.ts`](lib/content.ts).

- A single H1 combining the primary specialties with the city; H2s reinforce related terms (anxiety, trauma, EMDR, burnout, Santa Monica) in natural language
- Page title, meta description, canonical URL, Open Graph, and Twitter card metadata
- `LocalBusiness` / `ProfessionalService` and `FAQPage` structured data in [`components/JsonLd.tsx`](components/JsonLd.tsx)
- Descriptive alt text on every content image
- FAQ answers written to match real search questions ("Do you offer in-person and online therapy?")

Contact details are never hard-coded. Phone and email appear in the footer, booking buttons, and structured data only when the corresponding environment variables are set.

## Accessibility

- Semantic landmarks, one H1, and a logical heading hierarchy
- "Skip to content" link and visible focus outlines
- Keyboard-reachable dropdowns that open on focus as well as hover
- ARIA state on the mobile menu toggle; native `<details>` elements for the FAQ
- Respect for `prefers-reduced-motion`

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Fonts, metadata, root layout
│   ├── page.tsx            # Homepage composition
│   ├── globals.css         # Tailwind import and theme tokens
│   └── icon.svg            # Favicon
├── components/
│   ├── Header.tsx          # Navigation (desktop dropdowns, mobile menu)
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── WhoIHelp.tsx
│   ├── Statement.tsx       # Statement band and areas of expertise
│   ├── About.tsx           # Portrait, bio, methods
│   ├── Services.tsx
│   ├── OurOffice.tsx       # Custom section
│   ├── FAQ.tsx
│   ├── BookCTA.tsx
│   ├── Footer.tsx
│   ├── JsonLd.tsx          # Structured data
│   ├── Logo.tsx
│   └── ui.tsx              # Shared primitives (Container, Button, Eyebrow, Rich)
├── lib/
│   └── content.ts          # All copy, navigation, FAQs, and metadata
├── public/
│   └── images/             # Optimized photography
└── .env.example
```

## Getting Started

**Prerequisites:** Node.js 20 or later and npm.

```bash
# Clone the repository
git clone https://github.com/<your-username>/maya-reynolds-therapy.git
cd maya-reynolds-therapy

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).


## Acknowledgments

- Layout inspired by the homepage of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home).
- Portrait and office photography supplied with the project brief.
- Icons by [Lucide](https://lucide.dev/); fonts by [Fontsource](https://fontsource.org/).