import { useState } from "react";
import Header from "@/components/layout/Header";
import HeroBackdrop from "@/components/HeroBackdrop";
import HeroSection from "@/components/sections/HeroSection";
import CareerSection from "@/components/sections/CareerSection";
import ProductionArtifacts from "@/components/sections/ProductionArtifacts";
import LowLevelRoots from "@/components/sections/LowLevelRoots";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import AffiliateTopologyModal from "@/components/topology/AffiliateTopologyModal";

const Index = () => {
  const [topologyOpen, setTopologyOpen] = useState(false);

  return (
    <div className="bg-black text-zinc-100 min-h-screen relative overflow-x-clip">
      <HeroBackdrop />
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-0 pb-8 relative z-10">
        <div id="view-fusion" className="space-y-20">
          <HeroSection />
          <CareerSection />
          <ProductionArtifacts onOpenTopology={() => setTopologyOpen(true)} />
          <LowLevelRoots />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>

      <AffiliateTopologyModal
        open={topologyOpen}
        onClose={() => setTopologyOpen(false)}
      />
    </div>
  );
};

export default Index;