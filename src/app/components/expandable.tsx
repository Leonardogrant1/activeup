"use client";

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";

export type Service = {
  icon: React.JSX.Element;
  name: string;
  description: string;
  sub_points: string[];
};

type Props = {
  service: Service;
  index: number;
};

export default function Expandable({ service, index }: Props) {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className={`    white inline-flex  basis-[263px] min-h-[490px] ${
        !showDetails ? "text-black" : "text-white"
      } self-start rounded-xl overflow-hidden relative
      shadow
       
      `}
      onClick={() => setOpen(!open)}
      onMouseEnter={() => {
        setShowDetails(true);
      }}
      onMouseLeave={() => {
        setShowDetails(false);
      }}
    >
      <div
        className={`w-[200%] h-[200%] bg-[var(--primary-color)] z-[4] rounded-bl-full absolute top-0 bottom-0 left-0 right-0 ${
          showDetails ? "animate-slide-in" : "animate-slide-out"
        } `}
      ></div>

      <div className="absolute bottom-[-300px] left-0 right-0 top-[40%] z-[3] bg-white skew-y-[15deg]"></div>

      <div className="inline-flex w-full absolute inset-0 z-[2] bg-[url('../../public/background_images/houses.jpg')]"></div>

      <div className="justify-end relative z-[5] inline-flex flex-1 flex-col  px-9  w-full  py-2 space-y-5">
        <div className="text-[var(--primary-color)] rounded-full text-3xl">
          {service.icon}
        </div>
        <h3 className=" font-bold pr-10"> {service.name} </h3>

        <p className="leading-[1.5] pr-10  "> {service.description} </p>

        <div
          className={`grid ${
            !showDetails ? "grid-rows-[0fr]" : "grid-rows-[1fr] pb-6"
          }   transition-[grid-template-rows] `}
        >
          <div className="flex gap-1 flex-col space-y-1  overflow-hidden mb-2">
            {service.sub_points.map((point) => (
              <div className="flex flex-row items-center gap-2 pr-10  ">
                <GiCheckMark className="text-white text-sm min-w-[14px]  " />

                <p className="text-sm"> {point} </p>
              </div>
            ))}

            <div className="pt-7 w-full">
              <Link href="/contact">
                <button className=" w-full rounded-md bg-white text-[var(--primary-color)] p-3 font-bold">
                  {" "}
                  Jetzt Kontaktieren
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
