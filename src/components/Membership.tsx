"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-16 md:py-20 lg:py-24 bg-black relative"
      id="prices"
    >
      <div className="absolute inset-0 bg-[url('/gym-background.jpg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full max-w-7xl mx-auto"
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;

