import BrancheSection from "./components/BrancheSection";
import FullscreenSlider from "./components/FullscreenSlider";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { OverOns } from "./components/OverOns";


export default function Home() {
  return (
    <div>
      <FullscreenSlider />
      <OverOns />
      <HeroParallaxDemo />
      <BrancheSection />
    </div>

  );
}
