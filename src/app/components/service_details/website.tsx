import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Website() {
  return (
    <div>
      <div className="px-3 lg:px-8 pb-8 pt-28 overflow-x-hidden flex min-h-[146vh] w-full bg-[var(--primary-color)]">
        <div className="flex flex-col  w-full bg-[var(--primary-color)] min-h-[inherit] gap-5 p-[2px]">
          <div className=" min-h-[100vh] inline-flex  flex-row gap-5">
            <div className="inline-flex min-h-[inherit] flex-[2]  flex-col justify-center items-center space-y-28  p-8 md:p-12 bg-[#f3f3d4] rounded-3xl">
              <div className="inline-flex flex-col   space-y-9 ">
                <h1 className="service-header">
                  Webseiten Program&shy;mierung und Design
                </h1>
                <h2>Perfekte Webseiten für deinen digitalen Erfolg</h2>
                <h4>
                  In der heutigen digitalen Welt ist deine Webseite die
                  Visitenkarte deines Unternehmens. Sie ist der erste Eindruck,
                  den Kunden von dir bekommen. Wir verstehen, wie entscheidend
                  eine beeindruckende und leistungsfähige Webseite für dein
                  Geschäft ist. Deshalb bieten wir erstklassige Dienstleistungen
                  für Webseitenerstellung an - von einfachen Landingpages über
                  Online-Shops bis hin zu komplexen Webanwendungen.
                </h4>
              </div>
            </div>
            <div className="hidden xl:inline-flex flex-col     flex-1 relative bg-green-400 space-y-14 rounded-3xl"></div>
          </div>

          <div className="overflow-hidden whitespace-nowrap  inline-block   py-32   self-baseline">
            <div className="inline-block  animate-slide          text-white ">
              <img
                src="/background_images/nextjs.png"
                alt="facebook"
                className="w-16 md:w-20 inline-block  mx-20 object-contain"
              />

              <img
                src="/background_images/react.png"
                alt="facebook"
                className="w-16 md:w-20   mx-20 inline-block object-contain"
              />

              <img
                src="/background_images/supabase.png"
                alt="facebook"
                className="w-24 md:w-32 inline-block  mx-20 object-cover"
              />

              <img
                src="/background_images/wordpress.png"
                alt="facebook"
                className="w-20 md:w-28 inline-block  mx-20  object-cover"
              />

              <img
                src="/background_images/firebase.png"
                alt="facebook"
                className="w-24 md:w-32 inline-block  mx-20 object-cover"
              />

              <img
                src="/background_images/mongodb.png"
                alt="facebook"
                className="w-20 md:w-28 inline-block  mx-20  object-cover"
              />
            </div>

            <div className="inline-block    animate-slide      text-white ">
              <img
                src="/background_images/nextjs.png"
                alt="facebook"
                className="w-20 md:w-28   inline-block   mx-20 object-contain"
              />

              <img
                src="/background_images/react.png"
                alt="facebook"
                className="w-16 md:w-20  inline-block  mx-20 object-contain"
              />

              <img
                src="/background_images/supabase.png"
                alt="facebook"
                className="w-24 md:w-32  inline-block  mx-20 object-cover"
              />

              <img
                src="/background_images/wordpress.png"
                alt="facebook"
                className="w-20 md:w-28 inline-block  mx-20  object-cover"
              />

              <img
                src="/background_images/firebase.png"
                alt="facebook"
                className="w-24 md:w-32  inline-block  mx-20 object-cover"
              />

              <img
                src="/background_images/mongodb.png"
                alt="facebook"
                className="w-20 md:w-28  inline-block   mx-20  object-cover"
              />
            </div>
          </div>

          <div className="inline-flex flex-wrap min-h-[60vh] flex-row w-full gap-5">
            <div className="flex-[2] basis-[360px] relative min-h-[inherit]  bg-[#d2f7dc] rounded-3xl">
              <Image
                src="/background_images/landingpage.jpg"
                alt="neif"
                sizes="(max-width: 768px) 100%, 700px"
                fill
                priority
                objectFit="cover"
                className="rounded-3xl overflow-hidden"
              />
            </div>
            <div className="flex-[3] basis-[650px] min-h-[inherit] inline-flex p-8 md:p-32 justify-center flex-col space-y-9 font-bold  text-black bg-[var(--accent-color-3)]  rounded-3xl">
              <h2> Landingpages </h2>
              <h4 className="max-w-[650px]">
                Landingpages sind die Meister der Konversion. Sie sind darauf
                ausgerichtet, Besucher in Kunden zu verwandeln. Wir gestalten
                Landingpages, die nicht nur beeindrucken, sondern auch messbare
                Ergebnisse liefern. Von der ansprechenden Gestaltung bis zur
                klaren Botschaft - unsere Landingpages sind der Schlüssel zu
                deinem Erfolg.
              </h4>
            </div>
          </div>

          <div className="inline-flex flex-wrap-reverse min-h-[60vh] flex-row w-full gap-5">
            <div className="flex-[3] basis-[650px] inline-flex p-8 md:p-32 min-h-[inherit] justify-center flex-col space-y-9 font-bold  text-black bg-[#f3f3d4]  rounded-3xl">
              <h2> Online-Shops </h2>
              <h4 className="max-w-[650px]">
                Der Online-Handel boomt, und ein effizienter Online-Shop ist
                heute unerlässlich. Wir entwickeln Online-Shops, die nicht nur
                reibungslos funktionieren, sondern auch das Einkaufserlebnis
                deiner Kunden verbessern. Egal, ob du physische Produkte oder
                digitale Downloads verkaufst, wir haben die Lösung für dich.
              </h4>
            </div>
            <div className="flex-[2] basis-[360px] relative min-h-[inherit] bg-[#d2f7dc] rounded-3xl">
              <Image
                src="/background_images/shop.jpg"
                alt="neif"
                objectFit="cover"
                fill
                className="rounded-3xl overflow-hidden"
              />
            </div>
          </div>

          <div className="inline-flex flex-wrap   min-h-[60vh]   flex-row w-full gap-5  ">
            <div className="flex-[2] basis-[360px] relative  min-h-[inherit] rounded-3xl">
              <Image
                src="/background_images/software.jpg"
                alt="neif"
                fill
                objectFit="cover"
                className="rounded-3xl overflow-hidden"
              />
            </div>
            <div className="flex-[3] basis-[650px] min-h-[inherit] inline-flex p-8 md:p-32 justify-center flex-col space-y-9  font-bold  text-black bg-[var(--accent-color-1)] rounded-3xl">
              <h2> Web- und Mobile-Anwendungen </h2>
              <h4 className="max-w-[650px]">
                Unsere Stärke liegt in der Entwicklung leistungsstarker Web- und
                Mobile-Anwendungen. Wir bieten maßgeschneiderte Lösungen an, die
                nahtlos auf verschiedenen Plattformen funktionieren. Von der
                Idee bis zur Umsetzung schaffen wir innovative und
                benutzerfreundliche Anwendungen für eine erfolgreiche digitale
                Präsenz.
              </h4>
            </div>
          </div>

          <div className="inline-flex font-bold  items-center text-center text-white   min-h-[60vh]    p-8 md:p-32 justify-center flex-col space-y-9    rounded-3xl">
            <h2> Warum Uns Wählen? </h2>
            <h4 className="max-w-[650px]">
              Das beste Marketing bringt nichts, wenn deine Webseite nicht
              mithalten kann. Bei ActiveUp steckt unser Herzblut in jede
              Webseite, die wir erstellen. Unsere Designer, Entwickler und
              Experten für Benutzererfahrung arbeiten Hand in Hand, um Webseiten
              zu gestalten, die nicht nur beeindrucken, sondern auch messbare
              Ergebnisse liefern.
              <br /> <br /> <br />
              Eine großartige Webseite ist der Schlüssel zum digitalen Erfolg.
              Bei [Ihr Unternehmensname] sind wir bereit, deine Vision in die
              Realität umzusetzen. Egal, ob du eine einfache Landingpage, einen
              Online-Shop oder eine komplexe Webanwendung benötigst - wir haben
              die Expertise, um deine Anforderungen zu erfüllen. Lass uns
              gemeinsam deine digitale Erfolgsgeschichte schreiben.
            </h4>
          </div>

          <div className="inline-flex bg-[var(--accent-color-2)] rounded-3xl space-y-12 items-center py-9 px-8 md:px-20 text-center  justify-center min-h-[18vh]  flex-col w-full   ">
            <h2 className="font-bold">
              Kontaktiere uns jetzt und lass uns gemeinsam den Grundstein für
              deine beeindruckende Webseite legen, die deine digitale Präsenz
              auf das nächste Level heben wird!
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
