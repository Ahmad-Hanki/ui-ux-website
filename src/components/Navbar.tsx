import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import User from "@/assets/User.svg";
import Menu from "@/assets/Menu.svg";

const navLinks = ['Features', 'Pricing', 'Enterprice', 'Careers']

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center gap-x-[57px]">
        <Image alt="logo" priority src={Logo} />

        <div className="hidden lg:flex gap-x-[56px]">
          {navLinks.map((name, i) => {
            return <p className="text-[#36485C] font-medium" key={i}>
              {name}
            </p>
          })}
        </div>
      </div>
      <div className="flex gap-x-5">
        <p className="font-medium lg:block hidden text-[#36485C] pr-[56px]">Open an Account</p>
        <div className="lg:flex gap-x-2 items-center">
          <Image src={User} alt="user" />
          <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
        </div>
        <Image src={Menu} alt="menu" className="lg:hidden"/>
      </div>
    </nav>
  );
};

export default Navbar;
