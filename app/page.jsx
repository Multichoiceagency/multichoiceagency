// Home1SliderFullscreenMultiPage.js
import Footer1 from "@/components/footers/Footer1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";
import Hero4 from "@/components/homes/home-1/heros/Hero4";
import Head from 'next/head';

export const metadata = {
  title: "Website Laten Maken | Professioneel Webdevelopment | Multichoice Agency",
  description: "Multichoice Agency biedt deskundig webdevelopment en maatwerkoplossingen. Laat een nieuwe, goedkope of gecodeerde website maken die perfect aansluit bij uw bedrijfsbehoeften.",
};

export default function Home1SliderFullscreenMultiPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="website laten maken, webdevelopment, nieuwe website laten maken, goedkope website laten maken, gecodeerde website laten maken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.multichoiceagency.nl/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://www.multichoiceagency.nl/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.multichoiceagency.nl/images/og-image.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.multichoiceagency.nl/images/twitter-image.jpg" />
      </Head>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <Hero4 />
            <Home1 />
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
