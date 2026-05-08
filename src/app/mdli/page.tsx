import MDLIHero from "@/sections/mdli/MDLIHero";
import MDLIDiagram from "@/sections/mdli/MDLIDiagram";
import FlavorEngineering from "@/sections/mdli/FlavorEngineering";
import PerformanceSystem from "@/sections/mdli/PerformanceSystem";
import StabilityLayer from "@/sections/mdli/StabilityLayer";
import SystemSummary from "@/sections/mdli/SystemSummary";

export default function MDLIPage() {
  return (
    <main>
      <MDLIHero />
      <MDLIDiagram />
      <FlavorEngineering />
      <PerformanceSystem />
      <StabilityLayer />
      <SystemSummary />
    </main>
  );
}