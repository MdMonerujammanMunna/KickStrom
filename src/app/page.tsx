
import HomePageBanner from "@/components/HeroBanner/HomePageBanner";
import "./globals.css";
import FeatureBar from "@/components/FeatureBar/FeatureBarSection";
import SeasonBanner from "@/components/SeasonBanner/SeasonBanner";
import BrandMarquee from "@/components/Marquee/Marqueesection";
import FAQSection from "@/components/FAQsection/FaqSection";

export default function Home() {
  return (
    <>

      <HomePageBanner />
      <FeatureBar />
      <BrandMarquee />
      <SeasonBanner />
      <FAQSection />
    </>
  );
}
