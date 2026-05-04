import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SpecialistsSection } from "@/components/sections/SpecialistsSection";
import { HomeSearchJournalSection } from "@/components/sections/HomeSearchJournalSection";
import { CohortSection } from "@/components/sections/CohortSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { UnitsSection } from "@/components/sections/UnitsSection";
import { AppFeaturesSection } from "@/components/sections/AppFeaturesSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ProjectTowerSection } from "@/components/sections/ProjectTowerSection";
import { ProjectListSection } from "@/components/sections/ProjectListSection";
import { LocationIntelligenceSection } from "@/components/sections/LocationIntelligenceSection";
import { LocationCardsSection } from "@/components/sections/LocationCardsSection";
import { TrustCtaSection } from "@/components/sections/TrustCtaSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <FeatureSection />
        <SpecialistsSection />
        <HomeSearchJournalSection />
        <CohortSection />
        <ProjectsSection />
        <BlogSection />
        <WaitlistSection />
        <UnitsSection />
        <AppFeaturesSection />
        <CtaSection />
        <ProjectTowerSection />
        <ProjectListSection />
        
        <TrustCtaSection />
        <LocationIntelligenceSection />
        <LocationCardsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
