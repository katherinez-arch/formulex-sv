import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { TrustPillars } from "@/components/trust-pillars";
import { Comparison } from "@/components/comparison";
import { Pricing } from "@/components/pricing";
import { Waitlist } from "@/components/waitlist";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <TrustPillars />
        <Comparison />
        <Pricing />
        <Waitlist />
      </main>
      <SiteFooter />
    </div>
  );
}
