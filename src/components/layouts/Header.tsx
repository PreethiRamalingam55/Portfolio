import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { getIcon } from "@/lib/get-icon";
import HeaderIcon from "@/components/icons/header_icons";
import MenuHeader from "@/components/layouts/mobileHeader";
import ThemeSwitcher from "./themes";

type DivElementRef = React.MutableRefObject<HTMLDivElement | null>;

const Header: React.FC = () => {
  const siteHeaderRef = useRef(null) as DivElementRef;

  // const links = [
  //   {
  //     label: "Home",
  //     link: "home",
  //     icon: "HomeIcon",
  //     tooltip: "Go to Home",
  //   },
  //   {
  //     label: "About",
  //     link: "about",
  //     icon: "AboutIcon",
  //     tooltip: "Learn About Me",
  //   },
  //   {
  //     label: "Skills",
  //     link: "skill",
  //     icon: "SkillIcon",
  //     tooltip: "View My Skills",
  //   },
  //   {
  //     label: "Eductions",
  //     link: "educations",
  //     icon: "EducationIcon",
  //     tooltip: "View My Eductions",
  //   },
  //   {
  //     label: "Contact",
  //     link: "contact",
  //     icon: "ContactIcon",
  //     tooltip: "Contact Me",
  //   },
  // ];

  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full relative z-20 h-20"
    >
      <div className={"innerSticky  top-0 z-[1000] w-full"}>
        <div className="absolute top-[-25px]  md:left-52">
          <img src="/assets/images/varun_logo.png" alt="Logo" />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-32 md:right-52 top-8 my-10"
        >
          <ThemeSwitcher />
        </button>
        <button onClick={handleMenuToggle}>
          <div
            className="text-black absolute right-6 md:right-24 top-10 border-[1px] border-textcolor rounded-full w-[55px] h-[55px] p-5 flex flex-col gap-3 items-center justify-center group hover:border-primary dark:hover:border-darkprimary cursor-pointer transition ease-in-out duration-300"
            title="Menu"
          >
            {isMenuVisible ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fill-primary">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </>
            ) : (
              <>
                <div className="w-[20px] h-[2px] block bg-black dark:bg-white group-hover:bg-primary dark:group-hover:bg-white transition ease-in-out duration-300"></div>
                <div className="w-[20px] h-[2px] block bg-black dark:bg-white group-hover:bg-primary dark:group-hover:bg-white transition ease-in-out duration-300"></div>
              </>
            )}
          </div>
        </button>

        {/* <nav className="absolute right-24 top-[250px] hidden md:block">
          <ul className="border-[1px] border-textcolor w-14 rounded-full m-auto p-2">
            {links.map((v) => (
              <li key={v.label} className="p-2" title={v.tooltip}>
                <ScrollLink
                  to={v.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  
                >
                  {getIcon({ iconList: HeaderIcon, iconName: v.icon })}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav> */}
        {isMenuVisible && (
          <nav>
            <MenuHeader
              handleMenuClose={handleMenuClose}
              key="menu"
            />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
