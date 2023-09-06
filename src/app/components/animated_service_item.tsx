"use client";

import { motion } from "framer-motion";

type Props = {
  service: {
    icon: React.ReactNode;
    name: string;
    path: string;
    description: string;
    descriptive_name: string;
  };
  index: number;
};

export default function AnimatedSeriveItem({ service, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`flex flex-row text-center ${
        index % 2 === 0 ? "flex-row-reverse justify-end " : ""
      } xl:text-start   w-full   py-20  px-4 lg:px-14 min-h-[400px] text-black  `}
    >
      <div
        className={`inline-flex flex-col flex-1  ${
          index % 2 === 0 ? "justify-start" : " justify-end "
        } lg:px-14 items-center justify-center w-full`}
      >
        <img src={service.path} className=" w-2/3 h-auto rounded-lg  " />
      </div>

      <div
        className={`inline-flex justify-center   flex-col flex-1 space-y-7 ${
          index % 2 !== 0 ? "pr-24 pl-14" : "pr-14 pl-24 items-end"
        } 
        w-2/3
        `}
      >
        <div className="space-y-3">
          <h3>{service.name}</h3>
          <h1 className="  max-w-[600px]">{service.descriptive_name}</h1>
        </div>
        <h4 className="font-light max-w-[600px]">{service.description}</h4>
      </div>
    </motion.div>
  );
}
