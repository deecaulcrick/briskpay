"use client";
import Image from "next/image";
import iphoneImage from "../assets/iPhone.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [350, -350]);
  return (
    <section
      ref={sectionRef}
      className="mt-0 pt-20 pb-20 bg-[linear-gradient(to_bottom,#3478C1,#68A4E2_43%,#D4EBF8_79%,#F6F6F6)] "
    >
      <div className="brisk-container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white  text-4xl md:text-8xl tracking-tight text-center">
            Seamless Payments, Limitless Possiblilites.
          </h1>
          <p className="text-white text-lg text-center max-w-[540px] mx-auto mt-5">
            Designed for the next generation, BriskPay makes managing your money
            effortless and stress free maecenas vestibulum commodo.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-[30px] font-regular inline-flex justify-center items-center tracking-tight mt-5 z-10">
            Get the app
          </button>
          <div className="-mt-10 md:-mt-[70px] max-h-[500px] -mb-[60px]">
            <motion.img
              src={iphoneImage.src}
              alt="product image"
              className="relative md:-top-[150px]"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
