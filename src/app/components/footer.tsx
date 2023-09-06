import Link from "next/link";
import { VscLocation } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { AiOutlinePhone, AiFillWechat } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="    
      relative
      pb-32
      bg-[var(--primary-color)]
  
    "
      style={{
        backgroundPositionX: "100%",
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
      }}
    >
      <div className=" pt-[120px] pb-[75px] gap-16 flex flex-wrap   px-4 sm:px-10 lg:px-14 ">
        <div className=" inline-flex flex-1 flex-col items-center basis-[190px] text-white ">
          <Link href="/">
            <div className="relative w-52 aspect-[500/130]">
              <Image src="/logo_white.svg" alt="ActiveUp Media" fill priority />
            </div>
          </Link>
        </div>

        <div className="gap-16 flex flex-wrap justify-center flex-[4] basis-[785px] text-white">
          <div className="inline-flex  flex-1 flex-col items-center basis-[190px]  min-w-[231px] max-w-[238px]  ">
            <div className="flex flex-col w-full">
              <h4 className="  mb-9 font-bold text-center lg:text-start ">
                {" "}
                KONTAKT{" "}
              </h4>
              <ul className="flex flex-col space-y-6">
                <li>
                  {" "}
                  <div className="flex flex-row items-center space-x-3">
                    <VscLocation className="  text-2xl" />
                    <p> Biebricher Straße 7F, 55252 Mainz Kastel </p>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row items-center space-x-3">
                    <VscMail className=" text-base mr-[2px] ml-[3px]" />
                    <p> info@activeup.com </p>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row items-center space-x-3">
                    <AiOutlinePhone className="  text-base mr-[2px] ml-[3px]" />
                    <p>015203360004</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="inline-flex flex-1 flex-col items-center basis-[190px]  min-w-[231px] max-w-[238px] ">
            <div className="flex flex-col w-full">
              <h4 className="  mb-9 font-bold text-center lg:text-start  ">
                {" "}
                ÖFFNUNGSZEITEN{" "}
              </h4>
              <ul className="flex flex-col space-y-6">
                <li>
                  <div className="flex flex-row items-center space-x-3">
                    <MdEventAvailable className="  text-base mr-[2px] ml-[3px]" />
                    <p>Montag bis Freitag 9:00 - 17:00 Uhr</p>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row items-center space-x-3">
                    <AiFillWechat className=" text-base mr-[2px] ml-[3px]" />
                    <p> Samstag nach Absprache </p>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row items-center space-x-3">
                    <CgUnavailable className="  text-base mr-[2px] ml-[3px]" />
                    <p> Sonntag geschlossen </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="inline-flex flex-1 flex-col items-center  basis-[190px] min-w-[231px] max-w-[238px] ">
            <div className="flex flex-col  w-full md:w-auto ">
              <h4 className="  mb-9 font-bold text-center lg:text-start ">
                {" "}
                RECHTLICHES{" "}
              </h4>

              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/privacy-policy">
                    <div className="flex flex-row items-center space-x-3">
                      <IoMdArrowDropright className=" text-base mr-[2px] ml-[3px]" />{" "}
                      <p> Datenschutz </p>{" "}
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/imprint">
                    <div className="flex flex-row items-center space-x-3">
                      <IoMdArrowDropright className="  text-base mr-[2px] ml-[3px]" />{" "}
                      <p> Impressum </p>{" "}
                    </div>
                  </Link>{" "}
                </li>

                <li>
                  <Link href="/terms">
                    <div className="flex flex-row items-center space-x-3">
                      <IoMdArrowDropright className="  text-base mr-[2px] ml-[3px]" />{" "}
                      <p> AGB </p>{" "}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-9 px-4 lg:px-28 flex justify-center absolute bottom-0 z-10 left-0 right-0 bg-white">
        <h4 className="text-black text-center">© 2023. ActiveUp.</h4>
      </div>
    </footer>
  );
}
