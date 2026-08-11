import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompetitionBanner from "@/components/CompetitionBanner";
import AbacusSection from "@/components/AbacusSection";
import ProgramsSection from "@/components/ProgramsSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CompetitionBanner />
        <AbacusSection />
        <ProgramsSection />
        <StatsSection />
        <VideoSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
