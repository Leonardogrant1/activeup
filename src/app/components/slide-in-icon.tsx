"use client";

import { motion } from "framer-motion";

type Props = {
  translateFactorStart: number;

  translateFactorEnd: number;
  rotateFactorStart: number;
  rotateFactorEnd: number;

  children: React.ReactNode;
};

export default function SlideInIcon({
  translateFactorStart,

  translateFactorEnd,
  rotateFactorStart,
  rotateFactorEnd,
  children,
}: Props) {
  return (
    <motion.div
      initial={{ translateX: translateFactorStart, rotate: rotateFactorStart }}
      whileInView={{ translateX: translateFactorEnd, rotate: rotateFactorEnd }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="self-start"
    >
      {children}
    </motion.div>
  );
}
