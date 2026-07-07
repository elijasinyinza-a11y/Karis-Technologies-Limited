import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { PlatformsGrid } from "@/components/PlatformsGrid";
import { PlatformPreview } from "@/components/PlatformPreview";
import { SectorsStrip } from "@/components/SectorsStrip";
import { Consulting } from "@/components/Consulting";
import { Insights } from "@/components/Insights";
import { CtaBanner, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <PlatformsGrid />
        <PlatformPreview />
        <SectorsStrip />
        <Consulting />
        <Insights />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
