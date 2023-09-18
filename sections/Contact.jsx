"use client";

import React from "react";
import { FaMapPin, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import EmailForm from "../components/EmailForm";

const Page = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className="text-center min-h-[85vh] pt-28">
      <div className="text-4xl px-2 font-bold text-blue-400">
        Contact Us Today To Get Started
      </div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
        <div className=" text-blue-400 flex justify-center flex-col">
          <div className="md:pt-8 pt-4 px-5 ">
            <div className="flex p-4 justify-center md:pt-10 ">
              <div className="text-xl my-auto text-red-500 max-w-xl px-12">
                Easiest way to get in contact: TEXT
              </div>
            </div>
            <div className="flex p-4 justify-center">
              <div className="my-auto mr-2">
                <FaPhone size={25} />
              </div>
              <div className="text-xl">512-636-7303</div>
            </div>
          </div>
          <div className=" dark:bg-darkmain dark:text-darksecondary ">
            <div className="text-center justify-center rounded-lg">
              <h1 className="text-2xl pt-6 ">Get A Free Quote</h1>

              <EmailForm />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default Page;
