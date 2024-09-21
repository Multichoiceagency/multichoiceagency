"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/about-image.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Onze missie</h4>
        <p className="text-gray">
        Onze missie is om bedrijven te voorzien van resultaatgerichte websites en digitale oplossingen die niet alleen indruk maken, maar ook conversies opleveren. We willen ervoor zorgen dat elke klant het maximale uit zijn online aanwezigheid haalt, door hoogwaardige diensten te leveren die zijn afgestemd op hun unieke bedrijfsbehoeften. Door innovatie, maatwerk en toewijding streven we naar langdurig succes voor onze klanten.
</p>
        <h4 className="h5">Onze Visie</h4>
        <p className="text-gray">
        Bij Multichoice Agency geloven we in het creëren van digitale oplossingen die bedrijven laten groeien. We streven ernaar om niet alleen mooie, maar vooral effectieve websites en digitale producten te ontwikkelen, die onze klanten helpen om in een steeds veranderende online wereld te excelleren. Onze visie is om dé strategische partner te zijn die bedrijven online laat uitblinken.
        </p>
      </div>
    </div>
  );
}
