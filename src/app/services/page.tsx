import React from "react";
import { ImBubble } from "react-icons/im";

import Expandable, { Service } from "../components/expandable";
import AnimatedGrid from "../components/animated_grid";
import Link from "next/link";

export default function Page() {
  const services: Service[] = [
    {
      icon: <ImBubble />,
      name: "Hausmeisterservice",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Regelmäßige Inspektionen und Instandhaltung",
        "Reparaturen und Renovierungen",
        "Reinigung und Desinfektion",
        "24/7 Notdienst verfügbar",
      ],
    },
    {
      icon: <ImBubble />,
      name: "Müllmanagement",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Abfalltrennung und -entsorgung",
        "Umweltfreundliche Praktiken",
        "Recycling-Programme",
        "Saubere und sichere Abfallentsorgung",
      ],
    },
    {
      icon: <ImBubble />,
      name: "Winterdienst",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Schneeräumung und Streudienst",
        "Bereitschaftsdienst bei winterlichen Bedingungen",
        "Sicherheitsinspektionen",
        "Präventive Maßnahmen gegen Frostschäden",
      ],
    },
    {
      icon: <ImBubble />,
      name: "Gartenpflege",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Landschaftsgestaltung und -pflege",
        "Rasenmähen und Baumschnitt",
        "Unkrautbekämpfung",
        "Bewässerungsmanagement",
      ],
    },
    {
      icon: <ImBubble />,
      name: "Außenreinigung",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Fassadenreinigung",
        "Fensterreinigung",
        "Gehweg- und Hofreinigung",
        "Entfernung von Graffiti",
      ],
    },
    {
      icon: <ImBubble />,
      name: "Innenreinigung",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Büro- und Geschäftsreinigung",
        "Wohnungsreinigung",
        "Teppichreinigung",
        "Hygienemanagement",
      ],
    },

    {
      icon: <ImBubble />,
      name: "PV-Anlagen Nanoversieglung",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Oberflächenschutz vor Schmutz und Ablagerungen",
        "Steigerung der Energieeffizienz",
        "Reduzierung der Reinigungsintervalle",
        "Langfristige Kosteneinsparungen",
      ],
    },

    {
      icon: <ImBubble />,
      name: "Taubenabwehr",

      description:
        "Professioneller Hausmeisterservice inkl. 24/7 Support und Notdienst.",

      sub_points: [
        "Humane Methoden",
        "Präventive Maßnahmen",
        "Schutz vor Gebäudeschäden",
        "Saubere Umgebung erhalten",
      ],
    },
  ];

  return (
    <div>
      <section className=" h-[90vh] lg:h-[70vh] text-white w-full bg-[var(--primary-color)] relative ">
        <div className="flex flex-row flex-wrap w-full h-full   ">
          <div className=" absolute z-[1] inset-0 overflow-hidden inline-flex flex-1 bg-[url('../../public/background_images/houses.jpg')] bg-cover bg-[100% auto]">
            <div className="w-full h-full  bg-gradient-to-tr from-[var(--primary-color)]  to-transparent"></div>
          </div>
          <div className="inline-flex flex-1 items-center relative z-[2] justify-center">
            <div className=" px-4 sm:px-10 lg:px-32 max-w-[1000px] space-y-20 text-center">
              <h1 className=" font-notoSans mb-6">
                {" "}
                <b> Unsere </b> <i> Leistungen </i> <br /> <b> für Sie </b>
              </h1>

              <h4>
                Tauchen Sie tiefer in unsere breite Palette von Dienstleistungen
                ein. Bei David Service dreht sich alles darum, Ihren Lebensraum
                zu verbessern und zu schützen. Wir bieten Ihnen nicht nur
                Dienstleistungen, sondern auch maßgeschneiderte Lösungen, um
                sicherzustellen, dass Ihre Bedürfnisse erfüllt werden.
              </h4>
            </div>
          </div>
        </div>

        <img
          src="/background_images/bottom_wave_white.svg"
          className=" 
          h-20
          lg:h-36
        absolute
        -bottom-1

        left-0 
        right-0
        object-cover
        z-[4]
         
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />
      </section>
      <section className="w-full flex flex-col items-center bg-cover bg-[100% auto]">
        <div className="flex relative w-full flex-col items-center space-y-16 px-4 sm:px-10 lg:px-32  leading-none mt-36">
          <div className="space-y-20 flex flex-col items-center">
            <h4 className="text-4xl space-y-9 px-4 sm:px-10 lg:px-32 text-center text-[var(--primary-color)] uppercase">
              {" "}
              Auf diesen Gebieten sind wir spezialisiert{" "}
            </h4>

            <p className="my-10 text-[var(--primary-color)] text-center max-w-[1060px]">
              {" "}
              Wir sind stolz darauf, Ihnen diese detaillierten Informationen
              über unsere Dienstleistungen zur Verfügung zu stellen. Bei David
              Service steht die Qualität der Arbeit im Mittelpunkt, und wir sind
              bereit, alle erforderlichen Schritte zu unternehmen, um
              sicherzustellen, dass Ihre Erwartungen erfüllt werden. Unsere
              maßgeschneiderten Lösungen sind darauf ausgerichtet, Ihr Zuhause
              oder Ihre Geschäftsimmobilie in bestem Zustand zu halten.{" "}
            </p>
          </div>

          <AnimatedGrid>
            {services.map((service, i) => (
              <Expandable key={i} service={service} index={i} />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <section className="bg-[var(--primary-color)]">
        <img
          src="/background_images/bottom_wave_white.svg"
          className=" 
          h-20
          lg:h-36
        relative
        object-cover
        bg-gradient-to-b
        from-[var(--primary-color)]
        via-[var(--primary-color)]
        to-white
        gradient
        rotate-180
        
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />

        <div className="flex items-center flex-col space-y-6 px-4 sm:px-10 lg:px-32">
          <h4 className="my-10 text-white text-center">
            Bereit, unsere Dienstleistungen in Anspruch zu nehmen oder mehr
            darüber zu erfahren? Wir sind nur einen Klick oder einen Anruf
            entfernt. Kontaktieren Sie uns noch heute, um eine maßgeschneiderte
            Lösung für Ihr Zuhause oder Ihre Geschäftsimmobilie zu besprechen.
            Lassen Sie uns gemeinsam an der Verwirklichung Ihrer Vision
            arbeiten. Wir freuen uns darauf, von Ihnen zu hören und Ihnen unsere
            erstklassigen Dienstleistungen anzubieten.
          </h4>

          <Link href="/contact">
            <button className="rounded-3xl text-[var(--primary-color)] bg-white transition-[background-color] hover:bg-transparent border-[2px] border-white   hover:text-white py-3 px-5 self-center text-lg ">
              Kontaktieren Sie uns
            </button>
          </Link>
        </div>

        <img
          src="/background_images/bottom_wave_white.svg"
          className=" 
          h-20
          lg:h-36
        relative
        object-cover
        bg-gradient-to-b
        from-[var(--primary-color)]
        via-[var(--primary-color)]
        to-white
        gradient
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />
      </section>
    </div>
  );
}
