"use client";
import Link from "next/link";
import MobileBar from "./mobile_bar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const path = usePathname();

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

  console.log("poawnid", path);

  return (
    <header
      className={`${
        isFixed ? "bg-white text-black " : "bg-transparent text-white "
      } ${
        isFixed
          ? "bg-opacity-90 shadow-md text-[var(--primary-color)] "
          : "bg-opacity-100  "
      }  transition-[background-color] duration-300 py-2 px-4 sm:px-20  lg:py-7 flex   items-center fixed top-0 left-0 right-0 z-[15]
      space-x-20
      
      `}
    >
      <div className="flex  items-center ">
        <div className="flex flex-row items-center">
          <Link href="/">
            <div className="relative w-52 aspect-[500/130]">
              <Image
                src={!isFixed ? "/logo_white.svg" : "/logo.svg"}
                alt="ActiveUp Media"
                fill
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full ">
        <nav className="space-x-2 hidden w-full lg:flex items-center ">
          <Link
            href="/"
            className={`${
              path === "/"
                ? isFixed
                  ? `text-white bg-black rounded`
                  : `text-black bg-white rounded`
                : isFixed
                ? "text-black"
                : `text-white bg-none`
            }  px-[33px]`}
          >
            Start
          </Link>

          <Link
            href="/about"
            className={`${
              path === "/about"
                ? isFixed
                  ? `text-white bg-black rounded`
                  : `text-black bg-white rounded`
                : isFixed
                ? "text-black"
                : `text-white bg-none`
            }  px-[33px]`}
          >
            Über Uns
          </Link>

          <Link
            href="/services"
            className={`${
              path === "/services"
                ? isFixed
                  ? `text-white bg-black rounded`
                  : `text-black bg-white rounded`
                : isFixed
                ? "text-black"
                : `text-white bg-none`
            }  px-[33px]`}
          >
            Leistungen
          </Link>
        </nav>
        <Link href="/contact" className="hover:text-[var(--accent-color)]   ">
          <button
            className={` relative   border-2  box-border rounded-3xl py-2  px-4      
            hidden   lg:flex
             before:transition-[background-color]
            text-xl
            uppercase
            font-bold
         
            
            ${
              !isFixed
                ? `      

                text-black 
                border-white
                hover:text-black
                bg-white
          
           
     
         `
                : `
                bg-black
                text-white 
                 
                
          
      
      
          `
            }
        
        `}
          >
            Kontakt
          </button>
        </Link>

        <MobileBar isFixed={isFixed} />
      </div>
    </header>
  );
}
