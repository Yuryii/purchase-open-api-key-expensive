import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ZaloCommunityBanner from "@/components/ZaloCommunityBanner";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import TrustGuarantee from "@/components/TrustGuarantee";
import InstallationGuide from "@/components/InstallationGuide";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ZaloCommunityBanner />
        <Features />
        <Pricing />
        <Testimonials />
        <Comparison />
        <UseCases />
        <Integrations />
        <TrustGuarantee />
        <InstallationGuide />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
