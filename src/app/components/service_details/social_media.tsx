import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocialsMedia() {
  return (
    <div>
      <div className="px-3 lg:px-8 pb-8 pt-28 flex min-h-[146vh] w-full bg-[var(--primary-color)]">
        <div className="flex flex-col w-full bg-[var(--primary-color)] min-h-[inherit] gap-5 p-[2px]">
          <div className=" min-h-[100vh] inline-flex  flex-row gap-5">
            <div className="inline-flex flex-[2] min-h-[inherit] flex-col justify-center items-center space-y-28 p-8 md:p-12 bg-[var(--accent-color-1)] rounded-3xl">
              <div className="inline-flex flex-col   space-y-9 ">
                <h1 className="service-header"> Social Media Marketing</h1>
                <h2>Wir bringen deine Brand zum wachsen</h2>
                <h4>
                  Im digitalen Zeitalter ist Social Media Marketing zu einem
                  entscheidenden Faktor für den Erfolg von Unternehmen geworden.
                  Die richtige Präsenz auf Plattformen wie Facebook, Instagram
                  und TikTok kann den Unterschied zwischen Stagnation und
                  Wachstum ausmachen. Wir verstehen die Dynamik der sozialen
                  Medien und bieten maßgeschneiderte Dienstleistungen, die deine
                  Marke auf die nächste Stufe heben.
                </h4>
              </div>
            </div>
            <div className=" min-h-[inherit] hidden xl:inline-flex flex-col justify-around flex-1 relative bg-green-400 space-y-14 rounded-3xl"></div>
          </div>

          <div className="overflow-hidden whitespace-nowrap block py-32   w-full">
            <div className="inline-flex flex-row justify-around  animate-slide     w-full   text-white ">
              <img
                src="/background_images/facebook.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/snapchat.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/twitter.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/pinterest.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/linkedin.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/instagram.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />
            </div>

            <div className="inline-flex flex-row  justify-around    animate-slide  w-full  text-white ">
              <img
                src="/background_images/facebook.png"
                alt="facebook"
                className=" w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/snapchat.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/twitter.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/pinterest.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/linkedin.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />

              <img
                src="/background_images/instagram.png"
                alt="facebook"
                className="w-12 md:w-28 object-cover"
              />
            </div>
          </div>

          <div className="inline-flex  flex-wrap   min-h-[60vh]  flex-row w-full gap-5  ">
            <div className="flex-1 min-h-[inherit] relative basis-[360px]  bg-[#d2f7dc] rounded-3xl">
              <Image
                src="/background_images/ads.jpg"
                alt="neif"
                sizes="(max-width: 768px) 100%, 700px"
                fill
                priority
                objectFit="cover"
                className="rounded-3xl overflow-hidden"
              />
            </div>
            <div className="flex-[2] min-h-[inherit] basis-[976px] inline-flex p-8 md:p-32 justify-center flex-col space-y-9 font-bold  text-black bg-[var(--accent-color-3)]  rounded-3xl">
              <h2> Social Media Wachstum und Umsätze mit Paid Ads </h2>
              <h4 className="max-w-[650px]">
                Eines der leistungsstärksten Werkzeuge im Social Media Marketing
                sind bezahlte Werbeanzeigen. Unsere Experten in Paid Ads wissen,
                wie man die Algorithmen von Plattformen wie Facebook, Instagram
                und TikTok nutzt, um deine Zielgruppe zu erreichen. Wir
                entwickeln maßgeschneiderte Anzeigenkampagnen, die nicht nur
                Aufmerksamkeit erregen, sondern auch echte Ergebnisse liefern.
                Von der Zielgruppenauswahl bis zur Budgetoptimierung - wir
                kümmern uns um alles, damit du dich auf dein Geschäft
                konzentrieren kannst.
              </h4>
            </div>
          </div>

          <div className="inline-flex  flex-wrap-reverse  min-h-[60vh]  flex-row w-full gap-5  ">
            <div className="flex-[3] min-h-[inherit] inline-flex basis-[650px] p-8 md:p-32 justify-center flex-col space-y-9 font-bold  text-black bg-[var(--accent-color-2)]  rounded-3xl">
              <h2> Deine Geschichte erzählen durch Content Kreation </h2>
              <h4 className="max-w-[650px]">
                Guter Content ist der Schlüssel zur Verbindung mit deiner
                Zielgruppe. Wir nehmen Content Kreation und Content-Planung sehr
                ernst. Unsere Kreativköpfe denken sich nicht nur Ideen aus, sie
                setzen sie auch in die Realität um. Von der Konzeptentwicklung
                über das Filmen bis hin zur Bearbeitung - wir sorgen dafür, dass
                deine Botschaft klar und fesselnd ist. Egal, ob es sich um
                Videos, Grafiken oder Texte handelt, wir bringen deine
                Geschichte auf die Bildschirme deiner Zielgruppe.
              </h4>
            </div>
            <div className="flex-[2] relative basis-[360px] min-h-[inherit]  bg-[#d2f7dc] rounded-3xl">
              <Image
                src="/background_images/content_creation.jpg"
                alt="neif"
                objectFit="cover"
                fill
                className="rounded-3xl overflow-hidden"
              />
            </div>
          </div>

          <div className="inline-flex  flex-wrap  min-h-[60vh]   flex-row w-full gap-5  ">
            <div className="flex-[2] basis-[360px] min-h-[inherit] relative  rounded-3xl">
              <Image
                src="/background_images/management.jpg"
                alt="neif"
                fill
                objectFit="cover"
                className="rounded-3xl overflow-hidden"
              />
            </div>
            <div className="flex-[3] basis-[650px] min-h-[inherit] inline-flex p-8 md:p-32 justify-center flex-col space-y-9  font-bold  text-black bg-[var(--accent-color-1)]    rounded-3xl">
              <h2>
                {" "}
                Effiziente Präsenz durch Social Media Account Management{" "}
              </h2>
              <h4 className="max-w-[650px]">
                Social Media ist mehr als nur das gelegentliche Posten von
                Inhalten. Es erfordert eine strategische Herangehensweise und
                kontinuierliche Pflege. Unser Social Media Account
                Management-Team sorgt dafür, dass deine Präsenz auf Plattformen
                wie Facebook, Instagram und TikTok immer effizient ist. Wir
                entwickeln einen maßgeschneiderten Plan, um deine Zielgruppe zu
                engagieren und zu wachsen. Von der Planung von Posts bis zur
                Interaktion mit deiner Community - wir kümmern uns darum,
                während du dich auf das Wesentliche konzentrierst.
              </h4>
            </div>
          </div>

          <div className="inline-flex font-bold  items-center text-center text-white   min-h-[60vh]  p-8  md:p-32 justify-center flex-col space-y-9    rounded-3xl">
            <h2> Warum Uns Wählen? </h2>
            <h4 className="max-w-[850px]">
              Bei ActiveUp steckt Leidenschaft für Social Media Marketing in
              jedem, was wir tun. Wir verstehen, dass deine Marke einzigartig
              ist, und deshalb entwickeln wir maßgeschneiderte Strategien, die
              zu dir passen. Unsere Erfahrung im Bereich Paid Ads, Content
              Kreation und Social Media Account Management spricht für sich
              selbst. Wir halten uns stets auf dem neuesten Stand der Trends und
              Technologien, um sicherzustellen, dass du immer einen Schritt
              voraus bist.
            </h4>
          </div>

          <div className="inline-flex bg-[var(--accent-color-2)] rounded-3xl space-y-12 items-center py-9 px-3 md:px-20 text-center  justify-center min-h-[18vh]  flex-col w-full   ">
            <h2 className="font-bold">
              Jetzt kontaktieren und gemeinsam an deiner Social Media
              Erfolgsgeschichte arbeiten!
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
