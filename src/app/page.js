import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Welcome from "@/sections/Welcome";
import Feature from "@/sections/Feature";
import Payments from "@/sections/Payments";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Welcome />
      <Feature />
      <Payments />
      <CallToAction />
      <Footer />
    </div>
  );
}
