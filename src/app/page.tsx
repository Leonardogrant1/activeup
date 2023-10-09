import React from "react";

import { TbNotebook, TbSeo } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

export const metadata = {
  title: "ActiveUp - Ihr kompetenter Partner für Digitales Marketing",
  description:
    "Datenschutzerklärung von David Service, Ihren vertrauenswürdigen Partner für Hausmeisterdienste, Schädlingsbekämpfung, Müllmanagement, Winterdienst, Gartenpflege und mehr.",
};

export default function Page() {
  return (
    <div className=" px-3 lg:px-8 pb-8 pt-28 flex min-h-[140vh] w-full  ">
      <div className="flex flex-col w-full min-h-[inherit] [var(--primary-color)] h-full gap-5 p-[2px]">
        <div className="flex-[2] flex-wrap inline-flex flex-row gap-5">
          <div className="inline-flex flex-[2]  basis-[780px] flex-col justify-center items-center text-center md:text-start md:items-start space-y-9  p-8 lg:p-12 bg-[#92d4e0] rounded-3xl">
            <h1 className="top-header">
              Next Level <br /> Digital Marketing{" "}
            </h1>

            <Link href="/contact" scroll>
              <button className="rounded-full px-16 py-5 bg-[var(--primary-color)] text-[#92d4e0] uppercase">
                <h4 className="animate-pulse"> Jetzt Kontaktieren </h4>
              </button>
            </Link>
          </div>
          <div className="inline-flex flex-1 basis-[355px] relative bg-white rounded-3xl overflow-hidden">
            <video
              autoPlay
              loop
              src="/background_video/0901.mp4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="inline-flex flex-wrap flex-1 flex-row w-full gap-5">
          <div className="flex-[2] basis-[474px] flex flex-col justify-between  items-start  rounded-3xl gap-7">
            <div className=" flex flex-row space-x-5 items-center mt-8">
              <button className="bg-white rounded-full aspect-square w-10 inline-flex justify-center items-center">
                <BsFillPlayFill />
              </button>
              <h4 className="text-white">
                Find Out <br /> More About Us
              </h4>
            </div>

            <div className="flex flex-col space-y-4 items-start">
              <Link href="/services/social_media_marketing" scroll>
                <button className="px-6 py-3  border-white rounded-3xl border-[2px] text-white">
                  <h3>Social Media Marketing</h3>
                </button>
              </Link>
              <Link href="/services/website" scroll>
                <button className="px-6 py-3 border-white rounded-3xl border-[2px] text-white">
                  <h3>Professionelle Webseiten</h3>
                </button>
              </Link>

              {/* <Link href="/services/seo" scroll>
                <button className="px-6 py-3 border-white rounded-3xl border-[2px] text-white">
                  <h3>SEO and Analytics</h3>
                </button>
              </Link> */}
            </div>
          </div>

          <div className="inline-flex flex-1 basis-[630px] flex-wrap gap-5 ">
            <div className="flex-1 basis-[301px] bg-[var(--accent-color-2)] p-8 font-bold rounded-3xl uppercase inline-flex flex-col justify-between aspect-[6/5]">
              <h3>
                {" "}
                Angepasste <br /> Lösungen für Ihr Business
              </h3>

              <div className=" w-12 md:w-20 aspect-square relative self-end">
                <Image fill src="/background_images/unique.png" alt="unique" />
              </div>
            </div>

            <div className="flex-1 basis-[301px] bg-[var(--accent-color-1)]  flex-col p-8 font-bold  inline-flex justify-between rounded-3xl aspect-[6/5] ">
              <h3 className="uppercase">
                {" "}
                Steigere deine Marke und Umsatz um{" "}
              </h3>

              <div className="self-end text-6xl md:text-9xl">5x</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
