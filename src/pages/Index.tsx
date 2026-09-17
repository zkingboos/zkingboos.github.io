import { Suspense, lazy, useState } from "react";
import Header from "@/components/layout/Header";
import HeroBackdrop from "@/components/HeroBackdrop";
import HeroSection from "@/components/sections/HeroSection";
import AffiliateTopologyModal from "@/components/topology/AffiliateTopologyModal";

const CareerSection = lazy(() => import("@/components/sections/CareerSection"));
const ProductionArtifacts = lazy(() => import("@/components/sections/ProductionArtifacts"));
const LowLevelRoots = lazy(() => import("@/components/sections/LowLevelRoots"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const Index = () => {
  const [topologyOpen, setTopologyOpen] = useState(false);

  return (
    <div className="bg-black text-zinc-100 min-h-screen relative overflow-x-clip">
      <HeroBackdrop />
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-4 pb-8 relative z-10">
        <div id="view-fusion" className="space-y-20">
          <Suspense fallback={null}>
            <HeroSection />
            <CareerSection />
            <ProductionArtifacts onOpenTopology={() => setTopologyOpen(true)} />
            <LowLevelRoots />
            <TestimonialsSection />
            <ContactSection />
          </Suspense>
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