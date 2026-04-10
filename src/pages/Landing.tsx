import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyHullaa from "@/components/WhyHullaa";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyHullaa />
      <ComingSoon />
      <Footer />
    </div>
  );
}
