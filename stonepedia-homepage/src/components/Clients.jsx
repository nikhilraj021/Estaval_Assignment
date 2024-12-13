import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Clients = () => {
  //   const tech = [
  //     {
  //       id: 1,
  //       icon: <IoLogoHtml5 />,
  //       tone: "text-orange-400",
  //     },
  //     {
  //       id: 2,
  //       icon: <IoLogoCss3 />,
  //       tone: "text-blue-400",
  //     },
  //     {
  //       id: 3,
  //       icon: <SiTailwindcss />,
  //       tone: "text-sky-500",
  //     },
  //     {
  //       id: 4,
  //       icon: <IoLogoJavascript />,
  //       tone: "text-yellow-500",
  //     },
  //     {
  //       id: 5,
  //       icon: <RiReactjsLine />,
  //       tone: "text-cyan-500",
  //     },
  //     {
  //       id: 6,
  //       icon: <TbBrandNextjs />,
  //       tone: "text-gray-300",
  //     },
  //     {
  //       id: 7,
  //       icon: <TbBrandNodejs />,
  //       tone: "text-green-500",
  //     },
  //     {
  //       id: 7,
  //       icon: <SiMysql />,
  //       tone: "text-orange-300",
  //     },
  //   ];
  return (
    <div className="pb-10 md:pb-16 bg-white md:py-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-serif"
      >
        Our Valuable Clients
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 lg:gap-10 "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-08.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-09.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-12.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-13.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-17.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-11.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-07.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-18.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-10.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-19.png"
            className="h-10 lg:h-16"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-03.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-02.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-15.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-14.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-16.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-06.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-04.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/૧-05.png"
            className="h-10 lg:h-16"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Clients;
