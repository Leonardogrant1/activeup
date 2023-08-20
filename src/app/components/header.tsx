"use client";
import Link from "next/link";
import MobileBar from "./mobile_bar";
import { useEffect, useState } from "react";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isFixed ? "bg-white" : "bg-transparent"} ${
        isFixed
          ? "bg-opacity-90 shadow-md text-[var(--primary-color)] "
          : "bg-opacity-100 text-white "
      }  transition-[background-color] duration-300 py-2 px-4 sm:px-10 lg:px-32 flex justify-between items-center fixed top-0 left-0 right-0 z-[15]
      
      
      `}
    >
      <div className="flex items-center ">
        <div className="flex flex-row items-center">
          <Link href="/">
            <img
              src={isFixed ? "/logo.svg" : "/logo_white.svg"}
              alt="Logo"
              className="h-auto w-20 lg:w-24 mr-3"
            />
          </Link>
        </div>
      </div>
      <nav className="space-x-7 hidden lg:flex items-center">
        <Link href="/" className="hover:text-[var(--primary-color)] px-[33px]">
          Start
        </Link>

        <Link
          href="/about"
          className="hover:text-[var(--primary-color)]  px-[33px]"
        >
          Über Uns
        </Link>

        <Link
          href="/services"
          className="hover:text-[var(--primary-color)]  px-[33px]"
        >
          Leistungen
        </Link>
        <Link
          href="/contact"
          className="hover:text-[var(--primary-color)]  px-[33px]"
        >
          <button
            className={` relative bg-none  border-2  box-border rounded-3xl py-2  px-4      
            
            hover:border-[var(--primary-color)]
            before:transition-[background-color]
            
      ${
        !isFixed
          ? `      
          mix-blend-screen
      text-white 
      border-white
      hover:text-white
      hover:before:content-[''] hover:before:inset-0 hover:before:bg-[var(--primary-color)] hover:before:mix-blend-color-burn hover:before:absolute hover:before:rounded-3xl
      hover:before:border-2 
      hover:before:border-[var(--primary-color)] `
          : `

 
          text-[var(--primary-color)]  
          border-[var(--primary-color)] 
      
     
      hover:text-white 
      hover:before:content-[''] hover:before:inset-0 hover:bg-[var(--primary-color)]    hover:before:absolute hover:before:rounded-3xl
      hover:before:border-2 
      hover:border-[var(--primary-color)]  
      `
      }

            `}
          >
            Kontakt
          </button>
        </Link>
      </nav>

      <MobileBar isFixed={isFixed} />
    </header>
  );
}
