import BrancheSection from "./components/BrancheSection";
import { GoogleGeminiEffectDemo } from "./components/GeminiEffect";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { OverOns } from "./components/OverOns";



export default function Home() {
  return (


    <section className="w-full">
    <GoogleGeminiEffectDemo />

      <OverOns />
      <HeroParallaxDemo />
      <BrancheSection />


    </section>

  );
}
