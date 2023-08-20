"use client";

import { motion } from "framer-motion";

type Props = {
  service: { icon: React.ReactNode; name: string; description: string };
};

export default function AnimatedSeriveItem({ service }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-start justify-center space-y-4 p-4  xl:space-x-8  min-h-[200px] md:px-28  xl:px-32 "
    >
      <div className="  text-white   text-[40px] w-[40px] ">{service.icon}</div>

      <div className="flex-col flex space-y-3 ">
        <h4 className="text-white  text-xl">{service.name}</h4>

        <p className="  text-white font-light">{service.description}</p>
      </div>
    </motion.div>
  );
}
