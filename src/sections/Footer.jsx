import Logo from "../assets/logo.svg";
import Twitter from "../assets/socials/twitter.svg";
import Insta from "../assets/socials/insta.svg";
import Linkedin from "../assets/socials/linkedin.svg";
import Tiktok from "../assets/socials/tiktok.svg";
import Youtube from "../assets/socials/youtube.svg";

const footer = [
  {
    title: "Company",
    items: [
      "About us",
      "Office",
      "Annual Report",
      "Shareholders",
      "Sustainability",
      "Code of Conduct",
    ],
  },
  {
    title: "Career",
    items: [
      "Careers",
      "Culture",
      "Talent Programs",
      "Diversity",
      "Internships",
    ],
  },
  {
    title: "Account",
    items: ["Join Accounts", "Savings", "Freelance", "Plans", "Education"],
  },
  {
    title: "Lifestyle",
    items: ["Shop", "Insurance", "Donations", "eSIM", "Points"],
  },
];

function Footer() {
  return (
    <footer className="pt-6 bg-black text-white">
      <div className="container">
        <div className=" border-t border-t-[#2F2F2F] py-16 md:grid md:grid-cols-6 md:gap-16 md:items-start md:justify-center">
          <div className="md:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-10 tracking-tight">
              Designed for the next generation, BriskPay makes managing your
              money effortless.
            </p>
            <div className="flex gap-2 mt-10">
              <div className="social">
                <Insta />
              </div>
              <div className="social">
                <Twitter />
              </div>
              <div className="social">
                <Tiktok />
              </div>
              <div className="social">
                <Youtube />
              </div>
              <div className="social">
                <Linkedin />
              </div>
            </div>
          </div>
          <div className=" mt-10 md:mt-0 grid grid-cols-2  lg:grid-cols-4 md:col-span-3 lg:col-span-4 items-start justify-end col-span-4 gap-4">
            {footer.map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-[#6C6C6C] uppercase font-medium tracking-tight mb-3">
                  {title}
                </h3>
                {items.map((item) => (
                  <p key={item} className="text-xs">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className=" border-t border-t-[#2F2F2F] text-[#6C6C6C] py-3 flex justify-between text-xs">
          <div>Privacy Policy</div>
          <div>&copy; 2024 BriskPay. All rights reserved. </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
