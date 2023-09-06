"use client";

import { useAppSelector } from "@/redux/store";

export default function ScrollToContactButton() {
  const contactOffset = useAppSelector(
    (state) => state.contactformOffsetReducer
  );

  return (
    <button
      className="rounded-full px-12 md:px-16 py-4 md:py-5 bg-black text-[#92d4e0] uppercase"
      onClick={() =>
        window.scrollTo({
          top: contactOffset,
          behavior: "smooth",
        })
      }
    >
      <h4 className="animate-pulse"> Get in touch </h4>
    </button>
  );
}
