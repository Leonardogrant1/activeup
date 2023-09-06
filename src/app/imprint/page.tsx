export const metadata = {
  title: "ActiveUp - Ihr kompetenter Partner für Haus- und Gartenpflege",
  description:
    "Impressum von David Service, Ihren vertrauenswürdigen Partner für Hausmeisterdienste, Schädlingsbekämpfung, Müllmanagement, Winterdienst, Gartenpflege und mehr.",
};

export default function Imprint() {
  return (
    <div>
      <section
        className=" h-full text-white w-full bg-[var(--primary-color)] py-28  md:py-48 flex flex-col justify-center 
             px-4 sm:px-10 lg:px-32 space-y-8 break-words"
      >
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>
          David Service
          <br />
          David Ercin
        </p>
        <h3>Postanschrift:</h3>
        <p>
          Hasengartenstraße 20k
          <br />
          65189
          <br />
        </p>
        <h3>Kontakt:</h3>
        <p>
          Telefon: +4917622642535
          <br />
          E-Mail: info@david-service.de
        </p>
        <p></p>
        <h3>Vertreten durch:</h3>
        <p>
          David Ercin (Geschäftsführer)
          <br />
        </p>
        <p></p>
        <h3>Umsatzsteuer-Identifikationsnummer</h3>
        <p>
          awd22eq2dq2d2d2d
          <br />
        </p>
        <p>
          <br />
        </p>
        <p></p>
        <h2>Hinweise zur Website</h2>
        <p></p>
        <h2>Information gemäß § 36 VSBG</h2>
        <p>
          Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
          alternative Streitbeilegung in Verbrauchersachen) erklärt der
          Betreiber dieser Website:
        </p>
        <p>
          Wir sind bereit, an Streitbeilegungsverfahren bei der folgenden
          Verbraucherschlichtungsstelle teilzunehmen:
        </p>
        <p>
          Außergerichtliche Streitbeilegungsstelle für Verbraucher und
          Unternehmer e. V.
        </p>
        <p></p>
        <p>
          <em>
            Das Impressum wurde mit dem{" "}
            <a href="https://www.activemind.de/datenschutz/impressums-generator/">
              Impressums-Generator der activeMind AG
            </a>{" "}
            erstellt.
          </em>
        </p>
      </section>
    </div>
  );
}
