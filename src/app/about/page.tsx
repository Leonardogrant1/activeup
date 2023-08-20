import React from "react";

import { BsPatchCheck } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { BsEmojiSmile } from "react-icons/bs";

import ContactForm from "../components/contact_form";
import FadeInText from "../components/fade-in-text";
import AnimatedReasons from "../components/animated-reasons";

export default function Page() {
  const servicesData = [
    {
      name: "Kompetenz",
      icon: <BsPatchCheck className="text-4xl text-[var(--primary-color)] " />,
      description: `Unsere Fachleute sind Experten auf ihrem Gebiet und setzen sich dafür ein, die besten Ergebnisse zu erzielen.`,
    },
    {
      name: "Effizienz",
      icon: <TbTargetArrow className="text-4xl text-[var(--primary-color)] " />,
      description: `Wir arbeiten effizient, um Zeit und Ressourcen zu sparen, ohne die Qualität zu beeinträchtigen.`,
    },
    {
      name: "Nachhaltigkeit",
      icon: <PiPlant className="text-4xl text-[var(--primary-color)] " />,
      description: `Wir setzen uns für umweltfreundliche Praktiken ein und tragen unseren Teil zum Schutz unserer Umwelt bei.`,
    },
    {
      name: "Kundenzufriedenheit",
      icon: <BsEmojiSmile className="text-4xl text-[var(--primary-color)] " />,
      description: `Ihre Zufriedenheit hat oberste Priorität. Wir sind erst zufrieden, wenn Sie es sind.`,
    },
  ];

  return (
    <div>
      <section className="h-[105vh] relative text-white w-full bg-[var(--primary-color)]  ">
        <div className="flex flex-row flex-wrap w-full h-full bg-[url('../../public/background_images/houses.jpg')] xl:bg-none">
          <div className="inline-flex flex-1 basis-[576px] items-center justify-center  bg-[#73c4c5b3]   xl:bg-none ">
            <div className="px-4 sm:px-10 lg:px-32 space-y-7 text-center lg:text-start">
              <h1 className=" font-notoSans ">
                {" "}
                <b> Herzlich </b> willkommen <br /> <i> bei </i>
                <b> David Service </b>
              </h1>

              <FadeInText>
                <h4>
                  Ihrem kompetenten, effizienten und freundlichen Partner für
                  umfassende Haus- und Gartenpflegedienste. Unsere Mission
                  reicht weit über Dienstleistungen hinaus. Wir sind hier, um
                  gemeinsam mit Ihnen einen besseren Lebensraum zu schaffen, der
                  nicht nur ästhetisch ansprechend, sondern auch funktional und
                  komfortabel ist.
                </h4>
              </FadeInText>
            </div>
          </div>
          <div className=" relative hidden overflow-hidden xl:inline-flex flex-1 basis-[576px] bg-[url('../../public/background_images/houses.jpg')]">
            <div
              className="absolute left-0 bottom-0 top-0 w-44  bg-[url('../../public/background_images/side_waves.svg')] "
              style={{
                backgroundPositionY: "100%",
                backgroundSize: "cover",
                backgroundPositionX: "0%",
              }}
            >
              {" "}
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
         
         
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />
      </section>

      <section className="py-20 px-4 lg:px-28 flex flex-col space-y-24">
        <div className="flex flex-col space-y-5">
          <FadeInText>
            <h2 className=" text-[var(--primary-color)] uppercase text-center">
              Was uns ausmacht
            </h2>
          </FadeInText>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-24">
          {servicesData.map((service) => (
            <div className="inline-flex max-w-[500px]">
              <AnimatedReasons>
                <div className=" flex flex-col items-center space-y-9 ">
                  {service.icon}

                  <div className="flex flex-col items-center space-y-9">
                    <h4 className=" font-bold text-[var(--primary-color)] uppercase">
                      {" "}
                      {service.name}{" "}
                    </h4>
                    <p className="text-center">{service.description}</p>
                  </div>
                </div>
              </AnimatedReasons>
            </div>
          ))}
        </div>
      </section>

      <section className="h-screen text-white w-full bg-[var(--primary-color)] relative ">
        <div className="flex flex-row flex-wrap w-full h-full">
          <div className=" relative  hidden overflow-hidden lg:inline-flex flex-1 bg-[url('../../public/background_images/houses.jpg')]">
            <div
              className="absolute  right-0 rotate-180 bottom-0 top-0 w-44 bg-[url('../../public/background_images/side_waves.svg')] "
              style={{
                backgroundPositionY: "100%",
                backgroundSize: "cover",
                backgroundPositionX: "0%",
              }}
            >
              {" "}
            </div>
          </div>
          <div className="inline-flex flex-1 items-center justify-center">
            <div className="px-4 sm:px-10 md:px-20 xl:px-32 space-y-14 text-center lg:text-start ">
              <div className=" space-y-7 ">
                <FadeInText>
                  <h1 className="  font-notoSans mb-6">
                    {" "}
                    <b> Unsere </b> <i> Vision </i>
                  </h1>
                </FadeInText>

                <FadeInText>
                  <h4>
                    Unsere Vision ist es, Ihr Zuhause oder Ihre
                    Geschäftsimmobilie in einen Ort der Freude und des Komforts
                    zu verwandeln. Wir glauben daran, dass jedes Anwesen,
                    unabhängig von seiner Größe oder Form, das Potenzial hat,
                    ein harmonischer und einladender Raum zu sein. Unsere
                    Dienstleistungen sind darauf ausgerichtet, dieses Potenzial
                    zu entfalten und Ihren Lebensraum aufzuwerten.
                  </h4>
                </FadeInText>
              </div>

              <div className="space-y-7">
                <FadeInText>
                  <h1 className="  font-notoSans ">
                    {" "}
                    <b> Unsere </b> <i> Mission </i>
                  </h1>
                </FadeInText>
                <FadeInText>
                  <h4>
                    Unsere Mission ist es, Ihre Erwartungen zu übertreffen. Wir
                    sind ein Team von Profis, das sich der Qualität,
                    Zuverlässigkeit und Ihrem Wohlbefinden verpflichtet fühlt.
                    Wir möchten nicht nur Ihre Immobilie pflegen, sondern auch
                    Ihren Alltag erleichtern. Wir schaffen Räume, in denen Sie
                    sich wohl und glücklich fühlen können.
                  </h4>
                </FadeInText>
              </div>
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
         
         
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />

        <img
          src="/background_images/bottom_wave_white.svg"
          className=" 
          h-20
          lg:h-36
        absolute
        -top-1
        left-0 
        right-0
        object-cover
         rotate-180
         
        bg-no-repeat w-full"
          style={{
            objectPosition: "100% bottom",
          }}
        />
      </section>

      <div className="bg-white px-4 sm:px-10 lg:px-32 ">
        <div className="py-32   space-y-20  flex flex-col items-center  text-center">
          <FadeInText>
            <h2 className=" text-[var(--primary-color)] uppercase font-bold">
              {" "}
              Kontaktieren Sie uns
            </h2>
          </FadeInText>
          <FadeInText>
            <p className="max-w-[880px]">
              {" "}
              Wir sind bereit, Ihr Zuhause oder Geschäftsumfeld in einen Ort der
              Exzellenz zu verwandeln. Kontaktieren Sie uns noch heute, um mehr
              darüber zu erfahren, wie David Service Ihnen helfen kann. Wir
              freuen uns darauf, Sie kennenzulernen und Ihnen unsere
              erstklassigen Dienstleistungen anzubieten. Willkommen bei David
              Service, wo Qualität und Service zuhause sind, und wo wir
              gemeinsam an der Schaffung eines besseren Lebensraums für Sie
              arbeiten.{" "}
            </p>
          </FadeInText>
        </div>
      </div>

      <ContactForm request />
    </div>
  );
}
