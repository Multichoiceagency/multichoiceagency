import dynamic from "next/dynamic";
import Showcase from "@/components/preview/Showcase";

import Footer1 from "@/components/footers/Footer1";

import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";

import Hero4 from "@/components/homes/home-1/heros/Hero4";

export const metadata = {
  title:
    "Multi 1 Slider Fullscreen MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1SliderFullscreenMultiPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <Hero4 />
            <section className="full-wrapper pt-50">
              <Showcase />
            </section>
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
