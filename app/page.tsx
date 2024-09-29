import FullscreenSlider from "./components/FullscreenSlider";
import PortfolioSection from "./components/Portfolio";



export default function Home() {
  return (
    <section className="w-full">
      <FullscreenSlider />
      <PortfolioSection />
    </section>
  );
}
