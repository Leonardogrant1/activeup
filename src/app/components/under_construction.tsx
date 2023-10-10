import Image from "next/image";
import { LuConstruction } from "react-icons/lu";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col space-y-20 items-center justify-center h-screen w-full text-white fixed z-50 bg-black">
      <div className="relative w-64 aspect-[500/130]">
        <Image src="/logo_white.svg" alt="ActiveUp Media" fill priority />
      </div>
      <div className="flex flex-col space-y-8 items-center justify-center">
        <LuConstruction className="text-5xl" />
        <h1 className="text-4xl font-bold mb-4">Website in Bearbeitung</h1>
        <p className="text-lg mb-4">
          Melden Sie sich bei Fragen an{" "}
          <a
            className="hover:text-[var(--accent-color-3)]"
            href="mailto:info@activeupmedia.com"
          >
            info@activeupmedia.com
          </a>
        </p>
      </div>
    </div>
  );
}
