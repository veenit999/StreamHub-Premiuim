import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturedServices } from "@/components/sections/featured-services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Stats } from "@/components/sections/stats";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/sections/whatsapp-button";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <FeaturedServices />
        <WhyChooseUs />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
