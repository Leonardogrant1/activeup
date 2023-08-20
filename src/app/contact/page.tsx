import { MdEventAvailable } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import FadeInText from "../components/fade-in-text";
import ContactForm from "../components/contact_form";
import ScrollToContactButton from "../components/scroll-to-contact-button";

export default function Contact() {
  return (
    <div>
      <section className="h-[105vh] relative text-white w-full bg-[var(--primary-color)]">
        <div className="flex flex-row flex-wrap w-full h-full bg-[url('../../public/background_images/houses.jpg')] xl:bg-none">
          <div className="inline-flex flex-1 basis-[576px] items-center justify-center  bg-[#73c4c5b3]   xl:bg-none ">
            <div className="px-4 sm:px-10 lg:px-32 space-y-7 text-center lg:text-start">
              <h1 className=" font-notoSans  ">
                {" "}
                <b> Kontaktieren </b> <i> Sie </i> <br /> <b> uns. </b>
              </h1>

              <h4>
                Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei Ihren
                Anliegen zu helfen. Bei David Service sind wir stets bereit,
                Ihnen erstklassige Dienstleistungen und Unterstützung zu bieten.
                Ob Sie Fragen haben, ein maßgeschneidertes Angebot benötigen
                oder einfach mehr über uns erfahren möchten, zögern Sie nicht,
                uns zu kontaktieren. Ihr Zufriedenheit steht für uns an erster
                Stelle.
              </h4>

              <ScrollToContactButton />
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

      <section className="w-full flex justify-center bg-white py-32 sm:px-10 lg:px-32">
        <div className="w-full max-w-[1080px] flex flex-wrap gap-14 ">
          <div className="inline-flex flex-1 flex-col items-center basis-[190px]  ">
            <div className="flex flex-col w-full items-center space-y-14">
              <FadeInText>
                <h4 className="  mb-9 font-bold text-center   text-[var(--primary-color)]">
                  Wir sind bestrebt, Ihnen zu den für Sie passenden Zeiten zur
                  Verfügung zu stehen. Hier sind unsere regulären
                  Öffnungszeiten:
                </h4>
              </FadeInText>

              <FadeInText delay={0.4}>
                <ul className="flex flex-row flex-wrap justify-center gap-8 text-center">
                  <li className="w-[228px] flex  flex-col items-center gap-5">
                    <MdEventAvailable className="text-[var(--primary-color)] text-4xl mr-[2px] ml-[3px]" />
                    <h4>
                      Montag bis Freitag <br /> 9:00 - 17:00 Uhr
                    </h4>
                  </li>

                  <li className="w-[228px] flex  flex-col items-center gap-5">
                    <AiFillWechat className="text-[var(--primary-color)] text-4xl mr-[2px] ml-[3px]" />
                    <h4> Samstag nach Absprache </h4>
                  </li>

                  <li className="w-[228px] flex  flex-col items-center gap-5">
                    <CgUnavailable className="text-[var(--primary-color)] text-4xl mr-[2px] ml-[3px]" />
                    <h4> Sonntag geschlossen </h4>
                  </li>
                </ul>
              </FadeInText>

              <FadeInText>
                <h4 className="  mt-9 text-center font-bold  text-[var(--primary-color)]">
                  Wir sind flexibel und passen uns Ihren Bedürfnissen an. Wenn
                  Sie individuelle Termine benötigen oder Fragen haben,
                  kontaktieren Sie uns bitte. Ihre Zufriedenheit ist unsere
                  Priorität.
                </h4>
              </FadeInText>
            </div>
          </div>
        </div>
      </section>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}
