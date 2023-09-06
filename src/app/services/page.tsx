import React from "react";

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "ActiveUp - Ihr kompetenter Partner für Digitales Marketing",
  description:
    "Datenschutzerklärung von David Service, Ihren vertrauenswürdigen Partner für Hausmeisterdienste, Schädlingsbekämpfung, Müllmanagement, Winterdienst, Gartenpflege und mehr.",
};

export default function Page() {
  return (
    <div className="px-3 md:px-8 pb-8 pt-28 flex w-full  ">
      <div className="flex flex-col w-full    h-full gap-5 p-[2px]">
        <div className=" min-h-[70vh] flex-wrap-reverse  inline-flex flex-row gap-5">
          <div className="inline-flex  min-h-[inherit] flex-1 basis-[405px] relative bg-white rounded-3xl"></div>
          <div className="inline-flex min-h-[inherit] flex-[2] basis-[905px] flex-col justify-center text-center md:text-start items-center md:items-end space-y-9 p-8 md:p-12 bg-[var(--accent-color-3)] rounded-3xl">
            <h1 className="text-5xl md:text-8xl font-bold">
              {" "}
              Unsere Leistungen{" "}
            </h1>
          </div>
        </div>

        <div className=" min-h-[50vh] inline-flex flex-wrap flex-row gap-5">
          <div className="inline-flex min-h-[inherit] flex-[2] basis-[905px] flex-col justify-center  text-center md:text-start items-center md:items-end space-y-9  p-8 md:p-12 bg-[var(--accent-color-1)] rounded-3xl">
            <h1 className="service-header"> Social Media Marketing </h1>

            <Link href="/services/social_media_marketing">
              <button className="rounded-full px-12 md:px-16 py-4 md:py-5  bg-black text-[var(--accent-color-1)]  uppercase">
                <h4 className="animate-pulse"> Mehr Erfahren </h4>
              </button>
            </Link>
          </div>
          <div className="inline-flex min-h-[inherit] flex-1 relative overflow-hidden basis-[405px] bg-[var(--accent-color-1)]  rounded-3xl">
            <Image
              src="/gifs/social_media.gif"
              alt="webdesign"
              fill
              objectFit="contain"
            />
          </div>
        </div>

        <div className=" min-h-[50vh] flex-wrap-reverse  inline-flex flex-row gap-5">
          <div className="inline-flex min-h-[inherit] bg-[#f3f3d4] flex-1 basis-[405px] relative overflow-hidden  rounded-3xl">
            <Image
              src="/gifs/webdesign.gif"
              alt="webdesign"
              fill
              objectFit="contain"
            />
          </div>
          <div className="inline-flex min-h-[inherit] flex-[2] basis-[905px] flex-col justify-center  text-center md:text-start items-center md:items-end space-y-9 p-8 md:p-12 bg-[#f3f3d4] rounded-3xl">
            <h1 className="service-header"> Profes&shy;sionelle Webseite </h1>

            <Link href="/services/website">
              <button className="rounded-full px-12 md:px-16 py-4 md:py-5   bg-black text-[#f3f3d4]  uppercase">
                <h4 className="animate-pulse"> Mehr Erfahren </h4>
              </button>
            </Link>
          </div>
        </div>

        <div className=" min-h-[50vh] flex-wrap  inline-flex flex-row gap-5">
          <div className="inline-flex min-h-[inherit] flex-[2] basis-[905px] flex-col justify-center  text-center md:text-start items-center md:items-start space-y-9  p-8 md:p-12 bg-[var(--accent-color-2)] rounded-3xl   ">
            <h1 className=" service-header">
              Such&shy;maschinen Opti&shy;mierung
            </h1>

            <Link href="/services/seo">
              <button className="rounded-full px-12 md:px-16 py-4 md:py-5   bg-black text-[var(--accent-color-2)]  uppercase">
                <h4 className="animate-pulse"> Mehr Erfahren </h4>
              </button>
            </Link>
          </div>
          <div className="inline-flex bg-[var(--accent-color-2)]  min-h-[inherit] flex-1 basis-[405px] relative overflow-hidden  rounded-3xl">
            <Image
              src="/gifs/seo.gif"
              alt="webdesign"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
