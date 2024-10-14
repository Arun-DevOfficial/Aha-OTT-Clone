import Logo from "../assets/Ahalogo.png";
import User from "../assets/user.png";
import { Search } from "lucide-react";
import { BsTranslate } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <nav className="py-5 px-10 flex justify-between gap-12 items-center text-white bg-gradient-to-b from-black/60 via-transparent to-transparent font-title">
        <ul className="hidden sm:flex gap-12 text-sm items-center">
          <img src={Logo} alt="Aha" className="w-[58px]" />
          <li>Home</li>
          <li>Movies</li>
          <li>Shows</li>
          <li>Offers</li>
          <li>My Aha</li>
        </ul>
        <div className="flex items-center gap-6">
          <Search size={20} className="text-white cursor-pointer" />
          <BsTranslate size={20} />
          <button className="bg-[#ec5824] rounded-full shadow-2xl text-white font-medium px-[23px] py-[12px] text-sm border border-gray-100/20">
            Subscribe Now
          </button>
          <div className="flex items-center gap-3">
            <img src={User} alt="User" className="w-[33px]" />
            <p className="font-medium text-sm">Sign In</p>
          </div>
        </div>
      </nav>
    </>
  );
}
