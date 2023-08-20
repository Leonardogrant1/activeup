"use client";

import { BiMenu } from "react-icons/bi";

import { toggleMenu } from "@/redux/features/mobilemenuSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function MobileBar({ isFixed }: { isFixed: boolean }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <BiMenu
        className={` ${
          !isFixed ? "text-white" : "text-[var(--primary-color)]"
        }  text-[30px] lg:hidden min-w-[30px] `}
        onClick={() => dispatch(toggleMenu())}
      />
    </>
  );
}
