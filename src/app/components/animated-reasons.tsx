"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedReasons({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-start justify-center space-y-4 p-4  xl:space-x-8  min-h-[200px] md:px-28  xl:px-32 "
    >
      {children}
    </motion.div>
  );
}
