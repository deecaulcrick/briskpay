import Image from "next/image";
import ArrowIcon from "../assets/Arrow-w.svg";
import MenuIcon from "../assets/menu.svg";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="bg-black text-white py-3 flex justify-center items-center gap-2 tracking-tight">
        <p className="text-[#ddd] hidden md:block">
          The fastest way to send money internationally.
        </p>
        <div className="inline-flex gap-2 items-center">
          <p>Download the app today</p>
          <ArrowIcon />
        </div>
      </div>
      <div className=" py-4 container">
        <div className="flex justify-between items-center w-[100%]">
          <Logo />
          <MenuIcon className="md:hidden" />
          <nav className="hidden md:flex gap-6 text-white tracking-tight items-center justify-end font-light">
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Customers</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <button className="bg-transparent text-white px-4 py-2 rounded-[30px] font-light inline-flex justify-center items-center tracking-tight border">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
