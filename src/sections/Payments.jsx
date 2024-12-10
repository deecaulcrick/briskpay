"use client";

import geometricCard from "../assets/cards/geometric.png";
import minimalWhiteCard from "../assets/cards/minimal-white.png";
import minimalBlackCard from "../assets/cards/minimal-black.png";
import hologramCard from "../assets/cards/hologram.png";
import glassCard1 from "../assets/cards/glass.png";
import glassCard2 from "../assets/cards/glass2.png";
import Image from "next/image";
import { motion } from "motion/react";

function Payments() {
  return (
    <section className="py-16 bg-[linear-gradient(to_bottom,#F6F6F6,#FFFFFF,#D4EBF8,#68A4E2,#3478C1)]">
      <motion.div
        className="brisk-container flex flex-col items-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="md:text-center max-w-[540px]">
          <div className="text-[#68A4E2]">Get your card</div>
          <h2 className="section-heading">Elevate Your Payment Experience.</h2>
          <p className="mt-5 tracking-tight">
            We offer a range of physical cards designed to fit your lifestyle.
            Whether you&apos;re looking for a basic option for everyday
            purchases or a premium card with exclusive perks, we&apos;ve got you
            covered.
          </p>
        </div>
      </motion.div>
      <div className=" mt-20 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,black,black,transparent)]">
        <motion.div
          className="flex gap-6 pr-6 flex-none"
          animate={{
            translateX: " -50%",
          }}
          transition={{
            duration: 17,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image src={geometricCard} alt="" className="card-image" />
          <Image src={hologramCard} alt="" className="card-image" />
          <Image src={minimalWhiteCard} alt="" className="card-image" />
          <Image src={minimalBlackCard} alt="" className="card-image" />
          <Image src={glassCard1} alt="" className="card-image" />
          <Image src={glassCard2} alt="" className="card-image" />

          {/* second set of logos */}

          <Image src={geometricCard} alt="" className="card-image" />
          <Image src={hologramCard} alt="" className="card-image" />
          <Image src={minimalWhiteCard} alt="" className="card-image" />
          <Image src={minimalBlackCard} alt="" className="card-image" />
          <Image src={glassCard1} alt="" className="card-image" />
          <Image src={glassCard2} alt="" className="card-image" />
        </motion.div>
      </div>
    </section>
  );
}

export default Payments;
