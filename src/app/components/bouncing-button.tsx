"use client";

import { ImArrowDown2 } from "react-icons/im";

export default function BouncingButton() {
  return (
    <button
      className={`
  
  relative bg-none  border-2  box-border rounded-full   p-4      
text-3xl
hover:border-[var(--primary-color)]
before:transition-[background-color]


mix-blend-screen
text-white 
border-white
hover:text-white
hover:before:content-[''] hover:before:inset-0 hover:before:bg-[var(--primary-color)] hover:before:mix-blend-color-burn hover:before:absolute hover:before:rounded-3xl
hover:before:border-2 
hover:before:border-[var(--primary-color)] 


   animate-bounce
  
  `}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <ImArrowDown2 />
    </button>
  );
}
