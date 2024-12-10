"use client";
import Image from "next/image";
import splitBillImage from "../assets/split-the-bill.png";
import briskpayImage from "../assets/briskpay.png";
import giftImage from "../assets/gift.png";
import { motion } from "motion/react";

const features = [
  {
    upperImg: splitBillImage,
    upperText: "No more awkward reminders, just seamless sharing",
    heading: "Split the bill",
    subheading:
      "Whatever it is, you can quickly divide the cost and pay your share in seconds.",
    backgroundColor: "bg-black",
    textColor: "text-white",
  },
  {
    upperImg: briskpayImage,
    upperText: "",
    heading: "Instant Payments",
    subheading:
      "Need to pay a friend back? Send money isntanly with just a few taps.",
    backgroundColor: "bg-[url('/instant-payments.png')]",
    textColor: "text-white",
  },
  {
    upperImg: giftImage,
    upperText: "",
    heading: "Gift a little extra",
    subheading:
      "Whether it's a birthday or a job well done, gifting has never been this quick.",
    backgroundColor: "bg-[#C4E5F4]",
    textColor: "text-[#6C92A6]",
  },
];
export default function Feature() {
  return (
    <section className="py-16 bg-[#F6F6F6]">
      <div className="brisk-container">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="text-[#68A4E2] text-center">Our Features</div>
          <h2 className="section-heading text-center">
            Made For You: <br />
            <span className="text-[#6C6C6C]">
              Easy, Fast, and Smart Payments
            </span>
          </h2>
        </motion.div>
        <div>
          <div className="flex flex-col md:flex-row md:gap-3 items-center justify-center gap-6 mt-10 px-4 lg:px-16">
            {features.map((feature) => (
              <motion.div
                className={`rounded-[25px]  px-6 py-4 min-h-[350px] w-[327px] flex flex-col justify-between ${feature.backgroundColor} ${feature.textColor}`}
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1 }}
                key={feature.heading}
              >
                <div>
                  <Image src={feature.upperImg} alt={feature.heading} />
                  <p className="text-sm tracking-tight mt-2">
                    {feature.upperText}
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl tracking-tighter font-regular">
                    {feature.heading}
                  </h3>
                  <p className="text-sm tracking-tight">{feature.subheading}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
