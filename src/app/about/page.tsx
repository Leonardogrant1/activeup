import React from "react";

import Image from "next/image";

import SlideInIcon from "../components/slide-in-icon";

export default function Page() {
  return (
    <div>
      <div className="px-3 lg:px-8 pb-8 pt-28 flex min-h-[146vh] w-full bg-[var(--primary-color)]">
        <div className="flex flex-col w-full bg-[var(--primary-color)] min-h-[inherit] gap-5 p-[2px]">
          <div className=" min-h-[120vh] inline-flex  flex-row gap-5">
            <div className="hidden md:inline-flex flex-col justify-around flex-1 relative space-y-14 rounded-3xl">
              {" "}
              <SlideInIcon
                translateFactorStart={-50}
                translateFactorEnd={60}
                rotateFactorStart={0}
                rotateFactorEnd={30}
              >
                <img
                  src="/background_images/instagram.png"
                  alt="instagram"
                  className="w-24 object-cover translate-y-24  "
                />
              </SlideInIcon>
              <SlideInIcon
                translateFactorStart={290}
                translateFactorEnd={200}
                rotateFactorStart={0}
                rotateFactorEnd={30}
              >
                <img
                  src="/background_images/twitter.png"
                  alt="twitter"
                  className="w-24 object-cover translate-y-28 "
                />{" "}
              </SlideInIcon>
              <SlideInIcon
                translateFactorStart={260}
                translateFactorEnd={190}
                rotateFactorStart={100}
                rotateFactorEnd={5}
              >
                <img
                  src="/background_images/linkedin.png"
                  alt="linkedin"
                  className="w-24 object-cover  "
                />{" "}
              </SlideInIcon>
            </div>
            <div className="inline-flex flex-[2] text-center flex-col justify-center items-center space-y-28  p-8 lg:p-12 bg-[var(--accent-color-1)] rounded-3xl">
              <div className="inline-flex flex-col items-center space-y-9 ">
                <h1 className="text-5xl md:text-8xl font-bold pb-9">
                  {" "}
                  Das ist <br /> ActiveUp.
                </h1>
                <img
                  src="/gifs/giphy.gif"
                  alt="social media"
                  className="w-1/4 object-cover  "
                />{" "}
                <h2>
                  Willkommen bei ActiveUp, deinem Partner für digitales
                  Marketing und Online-Sichtbarkeit.
                </h2>
                <h3>
                  {" "}
                  Unsere Reise begann mit einer einfachen Idee: Wir wollten
                  Unternehmen dabei helfen, im digitalen Zeitalter aufzustehen
                  und aktiv zu werden.
                </h3>
              </div>

              <button className="rounded-full px-16 py-5  bg-black text-[var(--accent-color-1)] uppercase">
                <h4 className="animate-pulse"> Mehr Erfahren </h4>
              </button>
            </div>
            <div className="hidden md:inline-flex flex-col justify-around flex-1 relative space-y-14 rounded-3xl">
              {" "}
              <SlideInIcon
                translateFactorStart={140}
                translateFactorEnd={60}
                rotateFactorStart={70}
                rotateFactorEnd={10}
              >
                <img
                  src="/background_images/quality.png"
                  alt="checkmark"
                  className="w-24 object-cover  "
                />{" "}
              </SlideInIcon>
              <SlideInIcon
                translateFactorStart={-50}
                translateFactorEnd={60}
                rotateFactorStart={0}
                rotateFactorEnd={30}
              >
                <img
                  src="/background_images/facebook.png"
                  alt="facebook"
                  className="w-24 object-cover -translate-y-32  "
                />{" "}
              </SlideInIcon>
              <SlideInIcon
                translateFactorStart={150}
                translateFactorEnd={60}
                rotateFactorStart={0}
                rotateFactorEnd={30}
              >
                <img
                  src="/background_images/youtube.png"
                  alt="youtube"
                  className="w-24 object-cover -translate-y-32   "
                />
              </SlideInIcon>
            </div>
          </div>

          <div className="inline-flex min-h-[50vh] flex-wrap flex-row w-full gap-5   text-center ">
            <div className="flex-1 inline-flex basis-[466px] flex-col justify-center items-center min-h-[inherit]  space-y-9 bg-[var(--accent-color-2)] rounded-3xl p-6">
              <h1 className="font-bold">Fachwissen und Erfahrung</h1>
              <h4 className="font-semibold">
                Unser Team von Experten bringt jahrelange Erfahrung im
                Digitalmarketing und SEO mit und bleibt stets auf dem neuesten
                Stand der Branche.
              </h4>
            </div>
            <div className="flex-1 inline-flex basis-[466px]  min-h-[inherit] flex-col justify-center items-center break-words space-y-9  bg-[#f3f3d4] rounded-3xl  p-6">
              <h1 className="font-bold hyphens-auto">
                Maßgeschneiderte Lösungen
              </h1>
              <h4 className="font-semibold">
                Wir entwickeln individuelle Strategien, die genau auf die
                Bedürfnisse unserer Kunden zugeschnitten sind - keine
                Einheitslösungen.
              </h4>
            </div>
            <div className="flex-1 inline-flex basis-[466px] space-y-9   min-h-[inherit] flex-col justify-center items-center bg-[var(--accent-color-3)] rounded-3xl  p-6">
              <h1 className="font-bold">Partnerschaftliche Zusammenarbeit</h1>
              <h4 className="font-semibold">
                Wir betrachten unsere Kunden als Partner, arbeiten eng mit ihnen
                zusammen und legen Wert auf Transparenz und Vertrauen in unseren
                Beziehungen.
              </h4>
            </div>
          </div>

          <div className="inline-flex  flex-wrap   min-h-[60vh]  flex-row w-full gap-5   ">
            <div className="flex-1 basis-[350px]   min-h-[inherit] bg-[#d2f7dc] rounded-3xl"></div>
            <div className="flex-[2] basis-[965px]  min-h-[inherit] inline-flex py-32 md:px-32 justify-center flex-col space-y-9  text-white   rounded-3xl">
              <h2> Unsere Anfänge </h2>
              <h4 className="max-w-[650px]">
                ActiveUp wurde von einer Gruppe leidenschaftlicher
                Digitalmarketing-Experten gegründet, die die rasante Entwicklung
                der Online-Welt hautnah miterlebten. Wir sahen die Chancen und
                Herausforderungen, die diese neue Ära mit sich brachte, und
                beschlossen, unser Wissen und unsere Fähigkeiten zu bündeln, um
                anderen zum Erfolg zu verhelfen. Unsere Reise begann klein, aber
                unsere Ambitionen waren groß. Wir glaubten daran, dass jedes
                Unternehmen, unabhängig von seiner Größe oder seinem Budget, die
                Möglichkeit haben sollte, in der digitalen Welt zu glänzen. Das
                war der Beginn von ActiveUp.
              </h4>
            </div>
          </div>

          <div className="inline-flex  flex-wrap-reverse  min-h-[60vh]  flex-row w-full gap-5   ">
            <div className="flex-[2] basis-[965px]  min-h-[inherit] inline-flex py-32 md:px-32 justify-center flex-col space-y-9   text-white rounded-3xl">
              <h2> Unsere Mission </h2>
              <h4 className="max-w-[650px]">
                Unsere Mission ist es, die digitale Präsenz unserer Kunden zu
                stärken, ihre Reichweite zu maximieren und messbare Ergebnisse
                zu liefern. Wir setzen auf bewährte Methoden wie die Schaltung
                von Facebook Ads, die Kraft des Suchmaschinenmarketings (SEO)
                und die Erstellung überzeugender Landing Pages. <br /> <br />
                Als SEO-Experten wissen wir, dass Sichtbarkeit in den
                Suchmaschinen der Schlüssel zum Erfolg ist. Aber wir sind mehr
                als nur Experten - wir sind Partner. Wir arbeiten eng mit
                unseren Kunden zusammen, um maßgeschneiderte Strategien zu
                entwickeln und die einzigartige Identität ihres Unternehmens
                hervorzuheben.
              </h4>
            </div>
            <div className="flex-1 basis-[350px]  min-h-[inherit] bg-[#d2f7dc] rounded-3xl"></div>
          </div>

          <div className="inline-flex flex-wrap  min-h-[60vh]  flex-row w-full gap-5  ">
            <div className="flex-1 basis-[350px]  min-h-[inherit] bg-[#d2f7dc] rounded-3xl"></div>
            <div className="flex-[2] basis-[965px]  min-h-[inherit] inline-flex py-32 md:px-32 justify-center flex-col space-y-9   text-white rounded-3xl">
              <h2> Unsere Verpflichtung </h2>
              <h4 className="max-w-[650px]">
                Wir sind stolz auf unsere Verpflichtung zur Transparenz,
                Integrität und Exzellenz. Bei ActiveUp geht es nicht nur darum,
                Ergebnisse zu erzielen, sondern auch darum, langfristige
                Partnerschaften aufzubauen. Wir glauben an den Erfolg unserer
                Kunden, und unser Erfolg wird daran gemessen, wie gut wir ihnen
                helfen, ihre Ziele zu erreichen. <br /> <br />
                Wenn du bereit bist, aktiv zu werden und deine digitale Präsenz
                zu stärken, dann bist du bei ActiveUp genau richtig. Wir freuen
                uns darauf, mit dir zusammenzuarbeiten und deine digitale
                Erfolgsgeschichte zu schreiben.
              </h4>
            </div>
          </div>

          <div className="inline-flex bg-[var(--accent-color-2)] rounded-3xl space-y-12 items-center py-9 px-3 md:px-20 text-center  justify-center min-h-[18vh]  flex-col w-full   ">
            <h2 className="font-bold">
              Bereit, aktiv zu werden? Kontaktiere uns noch heute, und lass uns
              gemeinsam starten!
            </h2>
            <button className="rounded-full px-16 py-5 bg-black text-[var(--accent-color-2)]  uppercase">
              <h4 className="animate-pulse"> Get in touch </h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
