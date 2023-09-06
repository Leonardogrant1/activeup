"use client";

import { toggleMenu } from "@/redux/features/mobilemenuSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";

export default function MobileMenu() {
  const showMenu = useAppSelector((state) => state.mobilemenuReducer);

  const dispatch = useDispatch<AppDispatch>();
  const [showBackground, setShowBackground] = useState(true);

  return (
    <div
      className={`fixed z-20 ${
        showMenu ? "flex" : "hidden"
      }  bottom-0  w-full h-full bg-opacity-30 p-4`}
    >
      <div
        className={`w-full h-full flex flex-col bg-opacity-60 z-30   absolute top-0 bottom-0 left-0 right-0 ${
          showBackground ? "animate-slide-in-right" : "animate-slide-out-right"
        } `}
        onAnimationEnd={(event: React.AnimationEvent) => {
          if (event.animationName === "slide-out-right") {
            dispatch(toggleMenu());
            setShowBackground(true);
          }
        }}
      >
        <div className="inline-flex flex-1"></div>

        <div className="inline-flex flex-1 bg-black"></div>
        <div className="inline-flex flex-1"></div>
        <div className="inline-flex flex-1 bg-black"></div>
        <div className="inline-flex flex-1"></div>
        <div className="inline-flex flex-1 bg-black"></div>
      </div>

      <div
        className={`w-full h-full flex flex-col bg-opacity-60 z-30   absolute top-0 bottom-0 left-0 right-0 ${
          showBackground ? "animate-slide-in-left" : "animate-slide-out-left"
        } `}
      >
        <div className="inline-flex flex-1 bg-black"></div>
        <div className="inline-flex flex-1"></div>
        <div className="inline-flex flex-1 bg-black"></div>
        <div className="inline-flex flex-1"></div>
        <div className="inline-flex flex-1 bg-black"></div>
        <div className="inline-flex flex-1"></div>
      </div>

      <IoIosClose
        className="absolute z-[32] top-4 right-4 text-white text-6xl "
        onClick={() => setShowBackground(false)}
      />
      <nav
        className={`flex relative z-[31] flex-col space-y-14 text-white text-3xl justify-center items-center w-full h-full ${
          showBackground ? "opacity-100" : "opacity-0"
        } transition-opacity duration-75 `}
      >
        <Link
          href="/"
          onClick={() => setShowBackground(false)}
          className="hover:text-black px-[33px]"
        >
          Start
        </Link>

        <Link
          href="/about"
          onClick={() => setShowBackground(false)}
          className="hover:text-black  px-[33px]"
        >
          Über Uns
        </Link>

        <Link
          href="/services"
          onClick={() => setShowBackground(false)}
          className="hover:text-black  px-[33px]"
        >
          Leistungen
        </Link>
        <Link
          href="/contact"
          onClick={() => setShowBackground(false)}
          className="hover:text-black  px-[33px]"
        >
          Kontakt
        </Link>
      </nav>
    </div>
  );
}
