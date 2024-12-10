"use client";
import welcomeImg from "../assets/welcomeimg.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function Welcome() {
  return (
    <section className="pb-16 lg:px-10 bg-[#F6F6F6]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="md:flex justify-between gap-20 items-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="basis-1/2">
              <div className="text-[#68A4E2]">Welcome to BriskPay</div>
              <h2 className="text-4xl text-black font-regular tracking-tighter mt-5">
                We’re here to help you take control of your money and turn{" "}
                <span className="text-[#6C6C6C]">your dreams to reality</span>
              </h2>
            </div>
            <div className="basis-1/2">
              <p className="mt-5 text-sm tracking-tight">
                Our mission is to make banking fun, easy, and smart. With
                cutting-edge tools, no hidden fees and support along every step
                of the way, we&apos;re empowering the next generation of
                financial leaders. At BriskPay, you&apos;re not just a customer
                - you&apos;re a partner in building a brighter, more financially
                confident future
              </p>
              <div className="mt-4 flex gap-2 flex-wrap items-center">
                <div className="tag">Split payments</div>
                <div className="tag">Savings</div>
                <div className="tag">International transfer</div>
                <div className="tag">+ more</div>
              </div>
            </div>
          </motion.div>
          <motion.img
            src={welcomeImg.src}
            alt=""
            className="mt-5 lg:mt-10"
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
