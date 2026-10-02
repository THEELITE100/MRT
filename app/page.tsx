import { About } from "@/components/About";
import { BookCTA } from "@/components/BookCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { JsonLd } from "@/components/JsonLd";
import { OurOffice } from "@/components/OurOffice";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { WhoIHelp } from "@/components/WhoIHelp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <WhoIHelp />
        <Statement />
        <About />
        <Services />
        <OurOffice />
        <FAQ />
        <BookCTA />
      </main>
      <Footer />
      <JsonLd />
    </>
  );
}
