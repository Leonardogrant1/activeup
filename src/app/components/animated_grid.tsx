"use client";

import { useRef } from "react";

export default function AnimatedGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  const gridElement = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2  w-full  pb-40 pt-28 gap-7 max-w-[1170px]`}
      ref={gridElement}
    >
      {children}
    </div>
  );
}
