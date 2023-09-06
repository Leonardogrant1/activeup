import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SEO() {
  return (
    <div>
      <div className="px-3 lg:px-8 pb-8 pt-28 flex min-h-[146vh] w-full bg-[var(--primary-color)]">
        <div className="flex flex-col w-full  bg-[var(--primary-color)] min-h-[inherit] gap-5 p-[2px]">
          <div className=" min-h-[100vh] inline-flex  flex-row gap-5">
            <div className="inline-flex min-h-[inherit] flex-[2]  flex-col justify-center items-center space-y-28 p-8 md:p-12 bg-[var(--accent-color-2)] rounded-3xl">
              <div className="inline-flex flex-col   space-y-9 ">
                <h1 className="service-header">
                  Such&shy;maschinen Optimierung
                </h1>
                <h2>Dein Weg zur Spitze der Suchergebnisse</h2>
                <h4>
                  In der heutigen digitalen Landschaft ist SEO-Optimierung ein
                  entscheidender Faktor für den Online-Erfolg von Unternehmen.
                  Bei [Ihr Unternehmensname] verstehen wir die Kraft von
                  Suchmaschinenoptimierung (SEO) und bieten maßgeschneiderte
                  Dienstleistungen, um sicherzustellen, dass deine Marke ganz
                  oben in den Suchergebnissen steht.
                </h4>
              </div>
            </div>
            <div className="hidden xl:inline-flex flex-col justify-around flex-1 relative bg-green-400 space-y-14 rounded-3xl"></div>
          </div>

          <div className="inline-flex min-h-[60vh] flex-wrap  flex-row w-full gap-5   ">
            <div className="flex-[2] basis-[360px] relative  min-h-[inherit] bg-[#d2f7dc] rounded-3xl">
              <Image
                src="/background_images/keywords.jpg"
                alt="neif"
                sizes="(max-width: 768px) 100%, 700px"
                fill
                priority
                objectFit="cover"
                className="rounded-3xl overflow-hidden"
              />
            </div>
            <div className="flex-[3] basis-[650px] min-h-[inherit] inline-flex p-8 md:p-32 justify-center flex-col space-y-9 font-bold  text-black bg-[var(--accent-color-3)]  rounded-3xl">
              <h2> Keyword-Recherche </h2>
              <h4 className="max-w-[650px]">
                Die richtigen Keywords sind der Schlüssel zur SEO-Optimierung.
                Unsere Experten führen umfassende Keyword-Recherchen durch, um
                die besten Begriffe zu identifizieren, die deine Zielgruppe
                verwendet. Wir optimieren deine Inhalte, damit sie von den
                Suchmaschinen gut gerankt werden.
              </h4>
            </div>
          </div>

          <div className="inline-flex flex-wrap-reverse   min-h-[60vh]  flex-row w-full gap-5  ">
            <div className="flex-[3] basis-[650px] min-h-[inherit] inline-flex p-8 md:p-32 justify-center flex-col space-y-9 font-bold  text-black bg-[#f3f3d4]  rounded-3xl">
              <h2> On-Page-Optimierung </h2>
              <h4 className="max-w-[650px]">
                Deine Webseite ist die Basis deiner Online-Präsenz. Wir
                überprüfen und optimieren alle Aspekte deiner Webseite,
                einschließlich Meta-Tags, Überschriften, URLs und mehr. Wir
                stellen sicher, dass deine Seite suchmaschinenfreundlich ist und
                in den Suchergebnissen hervorsticht.
              </h4>
            </div>
            <div className="flex-[2] basis-[360px] min-h-[inherit] relative  bg-[#d2f7dc] rounded-3xl">
              <Image
                src="/background_images/onpage.jpg"
                alt="neif"
                objectFit="cover"
                fill
                className="rounded-3xl overflow-hidden"
              />
            </div>
          </div>

          <div className="inline-flex flex-wrap  min-h-[60vh]   flex-row w-full gap-5 ">
            <div className="flex-[2] basis-[360px] min-h-[inherit] relative  rounded-3xl">
              <Image
                src="/background_images/backlink.jpg"
                alt="neif"
                fill
                objectFit="cover"
                className="rounded-3xl overflow-hidden"
              />
            </div>
            <div className="flex-[3] basis-[650px] min-h-[inherit] inline-flex p-8 md:p-32 justify-center flex-col space-y-9  font-bold  text-black bg-[var(--accent-color-1)]    rounded-3xl">
              <h2> Backlink-Building und Netzwerken </h2>
              <h4 className="max-w-[650px]">
                Hochwertige Backlinks sind ein wesentlicher Bestandteil jeder
                SEO-Strategie. Unsere Experten arbeiten daran, hochwertige
                Backlinks für deine Webseite aufzubauen, um deine
                Online-Autorität zu stärken. Wir suchen nach Möglichkeiten,
                deine Marke in der digitalen Welt bekannt zu machen.
              </h4>
            </div>
          </div>

          <div className="inline-flex font-bold  items-center text-center text-white   min-h-[60vh] p-8 md:p-32 justify-center flex-col space-y-9    rounded-3xl">
            <h2> Warum Uns Wählen? </h2>
            <h4 className="max-w-[650px]">
              SEO-Optimierung ist nicht nur unser Job - es ist unsere
              Leidenschaft. Bei ActiveUp glauben wir daran, dass eine starke
              Online-Sichtbarkeit der Schlüssel zum Erfolg ist. Unsere
              SEO-Experten sind immer auf dem neuesten Stand der Technologien
              und Trends und sind bereit, deine Marke an die Spitze der
              Suchergebnisse zu führen.
              <br /> <br /> <br /> Die Welt des Online-Marketings dreht sich um
              Sichtbarkeit, und SEO-Optimierung ist der Schlüssel dazu. Bei [Ihr
              Unternehmensname] sind wir bereit, deine Marke an die Spitze der
              Suchergebnisse zu bringen. Egal, ob du nach Keyword-Recherche,
              On-Page-Optimierung oder Backlink-Building suchst - wir haben die
              Expertise, um deine Ziele zu erreichen. <br /> <br /> <br />
            </h4>
          </div>

          <div className="inline-flex bg-[var(--accent-color-2)] rounded-3xl space-y-12 items-center py-9 p-8 md:px-20 text-center  justify-center min-h-[18vh]  flex-col w-full   ">
            <h2 className="font-bold">
              Kontaktiere uns jetzt und lass uns gemeinsam an deinem Weg zur
              Spitze der Suchergebnisse arbeiten!
            </h2>
            <Link href="/contact">
              <button className="rounded-full px-12 md:px-16 py-4 md:py-5 bg-black text-[var(--accent-color-2)]  uppercase">
                <h4 className="animate-pulse"> Kontaktieren Sie uns </h4>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
