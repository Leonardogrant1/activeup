import React from "react";

import { FaHome, FaTrash, FaShieldAlt, FaTree } from "react-icons/fa";
import { PiPlanetFill } from "react-icons/pi";
import { RiVipDiamondFill } from "react-icons/ri";
import { SiStackblitz } from "react-icons/si";
import { BiBlock } from "react-icons/bi";
import { ImArrowDown2 } from "react-icons/im";
import AnimatedSeriveItem from "./components/animated_service_item";
import FadeInText from "./components/fade-in-text";
import BouncingButton from "./components/bouncing-button";

export default function Page() {
  const servicesData = [
    {
      name: "Hausmeisterservice",
      icon: <FaHome />,
      description: `Unser Hausmeisterservice kümmert sich um die Pflege und Instandhaltung Ihrer Immobilie. Von der Reparatur kleinerer Defekte bis zur regelmäßigen Reinigung – wir sind Ihr zuverlässiger Partner für alle Anliegen rund um Ihr Zuhause.`,
    },
    {
      name: "Müllmanagment",
      icon: <FaTrash />,
      description: `Unser Müllmanagement-Service sorgt für die effiziente Entsorgung und Trennung von Abfällen. Wir arbeiten daran, Umweltauswirkungen zu minimieren und Ihre Umgebung sauber und nachhaltig zu gestalten.`,
    },
    {
      name: "Winterdienst",
      icon: <FaShieldAlt />,
      description: `Unser Winterdienst stellt sicher, dass Ihr Grundstück sicher und zugänglich bleibt, selbst bei den strengsten Wetterbedingungen. Schnee und Eis werden von unseren Fachleuten fachgerecht beseitigt.`,
    },
    {
      name: "Gartenpflege",
      icon: <PiPlanetFill />,
      description: `Unsere Gartenpflege-Experten kümmern sich um Ihre Grünanlagen. Wir gestalten und pflegen Gärten, damit Sie sich in Ihrer grünen Oase wohlfühlen können.`,
    },
    {
      name: "Außenreinigung",
      icon: <FaTree />,
      description: `Unsere Außenreinigungsdienste sorgen für eine makellose Fassade und saubere Außenbereiche. Wir entfernen Schmutz und Ablagerungen, um den Wert Ihrer Immobilie zu erhalten.`,
    },
    {
      name: "Innenreinigung",
      icon: <RiVipDiamondFill />,
      description: `Unsere Innenreinigungsexperten kümmern sich um Sauberkeit und Hygiene in Ihrem Zuhause oder Geschäft. Wir sorgen dafür, dass jeder Raum strahlend sauber ist.`,
    },
    {
      name: "PV-Anlage Nanoversieglung",
      icon: <SiStackblitz />,
      description: `Unsere PV-Anlagen Nanoversieglung maximiert die Leistung Ihrer Solaranlagen und minimiert Wartungsaufwand. Mit modernster Nanotechnologie schützen wir Ihre Paneele vor Verschmutzung, was zu höherer Energieerzeugung und langfristigen Einsparungen führt.`,
    },
    {
      name: "Taubenabwehr",
      icon: <BiBlock />,
      description: `Unsere Taubenabwehrdienste schützen Ihr Gebäude vor Schäden und Verschmutzungen durch Vögel. Wir verwenden humane Methoden, um unerwünschte Gäste fernzuhalten.`,
    },
  ];

  return (
    <div>
      <section className="h-[105vh] relative text-white w-full bg-[var(--primary-color)]  rounded-b-[50px]">
        <div className="flex flex-row flex-wrap w-full h-full  ">
          <div className=" absolute z-[1] inset-0 overflow-hidden inline-flex flex-1 bg-[url('../../public/background_images/houses.jpg')] bg-cover bg-[100% auto]">
            <div className="w-full h-full  bg-gradient-to-tr from-[var(--primary-color)]  to-transparent"></div>
          </div>
          <div className="inline-flex flex-1 items-center relative z-[2] justify-center">
            <div className="px-4 sm:px-10 lg:px-32 max-w-[1000px] space-y-20 text-center">
              <h1 className="font-notoSans mb-6">
                {" "}
                <b> Ihre Partner für den </b> <br /> <i> Rundum-Service </i>{" "}
                <br /> <b> am Haus </b>
              </h1>

              <FadeInText>
                <h4>
                  Willkommen bei David Service, Ihrem Rundum-Partner für
                  professionelle Hausmeister- und Gartenpflegedienste. Wir
                  kümmern uns um alles, damit Sie es nicht müssen. Von der
                  Winterdienstplanung bis zur fachgerechten Taubenabwehr –
                  unsere Experten sind für Sie da. Unsere Mission ist es, Ihr
                  Zuhause oder Ihr Geschäftsumfeld sauber, sicher und
                  komfortabel zu gestalten. Verlassen Sie sich auf uns für
                  höchste Qualität und Zuverlässigkeit.
                </h4>
              </FadeInText>

              <BouncingButton />
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
        z-[5]
        object-cover
         
        to-white
        gradient
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />
      </section>

      <div className="bg-white font-bold   border-[var(--primary-color)] py-32 px-4 lg:px-28 text-center">
        <h2 className="  text-[var(--primary-color)] uppercase">
          <FadeInText>Unsere Dienstleistungen im Überblick</FadeInText>
        </h2>
      </div>

      <section className="  flex flex-col items-center      bg-[var(--primary-color)] ">
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

        <div className="px-4 lg:px-28 py-24 space-y-28  ">
          <div className="flex flex-col items-center  w-full ">
            <h2 className="  mb-4 text-white  text-center max-w-[870px] leading-[1.5]">
              {" "}
              Mit unserer Erfahrung und einem echten Fokus auf
              Kundenzufriedenheit können Sie sich bei Ihrem nächsten Auftrag auf
              uns verlassen.{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 w-full ">
            {servicesData.map((service, index) => (
              <AnimatedSeriveItem service={service} key={index} />
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
