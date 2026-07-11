
import HomePageBanner from "@/components/HeroBanner/HomePageBanner";
import "./globals.css";
import FeatureBar from "@/components/FeatureBar/FeatureBarSection";
import SeasonBanner from "@/components/SeasonBanner/SeasonBanner";
import BrandMarquee from "@/components/Marquee/Marqueesection";
import FAQSection from "@/components/FAQsection/FaqSection";
import AboutSection from "@/components/AboutMe/Aboutme";

export default function Home() {
  return (
    <>

      <HomePageBanner />
      <FeatureBar />
      <SeasonBanner />
      <AboutSection />
      <FAQSection />
      <BrandMarquee />
    </>
  );
}
