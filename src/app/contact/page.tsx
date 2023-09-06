import { MdEventAvailable } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import FadeInText from "../components/fade-in-text";
import ContactForm from "../components/contact_form";
import ScrollToContactButton from "../components/scroll-to-contact-button";

export const metadata = {
  title: "ActiveUp - Ihr kompetenter Partner für Digitales Marketing",
  description:
    "Datenschutzerklärung von David Service, Ihren vertrauenswürdigen Partner für Hausmeisterdienste, Schädlingsbekämpfung, Müllmanagement, Winterdienst, Gartenpflege und mehr.",
};

export default function Contact() {
  return (
    <div className="px-3 md:px-8 pb-8 pt-28 flex w-full flex-col ">
      <div className="flex flex-col  min-h-[140vh] w-full  gap-5 p-[2px]">
        <div className=" flex-[2] inline-flex flex-row gap-5">
          <div className="inline-flex flex-[2] flex-col justify-center items-start space-y-9  p-8 md:p-12 bg-[#92d4e0] rounded-3xl">
            <h1 className="top-header"> Worauf wartest du?</h1>

            <h3>
              Dein digitales Wachstum ist unser Anliegen, und wir möchten
              sicherstellen, dass du dich von Anfang an wohl fühlst. Bei uns
              gibt es kein Risiko, nur Chancen.
            </h3>
            <ScrollToContactButton />
          </div>
          <div className="hidden xl:inline-flex flex-1 relative bg-white rounded-3xl"></div>
        </div>

        <div className="inline-flex flex-wrap flex-1 flex-row w-full gap-5 text-center font-bold">
          <div className="flex-1 basis-[466px] bg-[var(--accent-color-1)] rounded-3xl inline-flex flex-col items-center p-8 space-y-7 justify-center">
            <h2>100% Zufriedenheit</h2>

            <h4>
              Dein Erfolg ist unser Erfolg. Wenn du nicht zufrieden bist, sind
              wir es auch nicht. Wir arbeiten hart daran, sicherzustellen, dass
              unsere Dienstleistungen deinen Erwartungen entsprechen.
            </h4>
          </div>
          <div className="flex-1 basis-[466px] bg-[var(--accent-color-2)] rounded-3xl inline-flex flex-col items-center p-8 space-y-7 justify-center">
            <h2>Transparente Preise</h2>
            <h4>
              {" "}
              Bei uns gibt es keine versteckten Gebühren oder Überraschungen.
              Wir bieten klare und transparente Preisgestaltung, damit du genau
              weißt, was du bekommst.
            </h4>
          </div>
          <div className="flex-1 basis-[466px] bg-[#f3f3d4] rounded-3xl inline-flex flex-col items-center p-8 space-y-7 justify-center">
            <h2>Geld-zurück-Garantie</h2>
            <h4>
              Wir sind so überzeugt von unserer Arbeit, dass wir eine
              Geld-zurück-Garantie anbieten. Wenn du innerhalb der ersten 3
              Monaten nicht zufrieden bist, erstatten wir dir dein Geld zurück,
              ohne Fragen zu stellen.
            </h4>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
