
import Navbar from "@/components/NaBar/Navbar";
import HomePageBanner from "@/components/HeroBanner/HomePageBanner";
import "./globals.css";
import FeatureBar from "@/components/FeatureBar/FeatureBarSection";
import SeasonBanner from "@/components/SeasonBanner/SeasonBanner";
import BrandMarquee from "@/components/Marquee/Marqueesection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePageBanner />
      <FeatureBar />
      <BrandMarquee />
      <SeasonBanner />
    </>
  );
}
