import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ZaloCommunityBanner from "@/components/ZaloCommunityBanner";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ReferralProgram from "@/components/ReferralProgram";
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
        <ReferralProgram />
        <InstallationGuide />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
