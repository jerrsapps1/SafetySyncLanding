import Navigation from "../components/landing/navigation";
import Hero from "../components/landing/hero";
import Features from "../components/landing/features";
import Stats from "../components/landing/stats";
import Testimonial from "../components/landing/testimonial";
import CTA from "../components/landing/cta";
import Footer from "../components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
