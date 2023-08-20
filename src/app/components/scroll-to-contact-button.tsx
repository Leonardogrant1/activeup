"use client";

import { useAppSelector } from "@/redux/store";

export default function ScrollToContactButton() {
  const contactOffset = useAppSelector(
    (state) => state.contactformOffsetReducer
  );

  return (
    <button
      className="rounded-3xl text-[var(--primary-color)] bg-white transition-[background-color] hover:bg-transparent border-[2px] border-white   hover:text-white py-3 px-5 self-center text-lg "
      onClick={() =>
        window.scrollTo({
          top: contactOffset,
          behavior: "smooth",
        })
      }
    >
      {" "}
      Jetzt kontaktieren{" "}
    </button>
  );
}
