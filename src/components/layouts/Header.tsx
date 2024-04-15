import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { getIcon } from "@/lib/get-icon";
import HeaderIcon from "@/components/icons/header_icons";
import MenuHeader from "@/components/layouts/mobileHeader";
import ThemeSwitcher from "./themes";

type DivElementRef = React.MutableRefObject<HTMLDivElement | null>;

const Header: React.FC = () => {
  const siteHeaderRef = useRef(null) as DivElementRef;
  const [activeLink, setActiveLink] = useState("home"); // State to keep track of active link

  const links = [
    {
      label: "Home",
      link: "home",
      icon: "HomeIcon",
      tooltip: "Go to Home"
    },
    {
      label: "About",
      link: "about",
      icon: "AboutIcon",
      tooltip: "Learn About Me"
    },
    {
      label: "Skills",
      link: "skill",
      icon: "SkillIcon",
      tooltip: "View My Skills"
    },
    {
      label: "Eductions",
      link: "educations",
      icon: "EducationIcon",
      tooltip: "View My Eductions"
    },
    {
      label: "Contact",
      link: "contact",
      icon: "ContactIcon",
      tooltip: "Contact Me"
    },
  ];

  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      let activeSection = "home"; 
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeSection = sectionId;
        }
      });
  
      setActiveLink(activeSection);
      console.log(activeSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header id="siteHeader" ref={siteHeaderRef} className="w-full relative z-20">
      <div className={"innerSticky fixed top-0 z-[1000] w-full"}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hidden md:block  absolute right-6 md:right-52 top-10 my-10"
            >
              <ThemeSwitcher handleCloseMenu={handleMenuClose} />
            </button>
        <div
          className="text-black absolute right-6 md:right-24 top-10 border-[1px] border-textcolor rounded-full w-[55px] h-[55px] p-5 flex flex-col gap-3 items-center justify-center group hover:border-primary dark:hover:border-darkprimary"
          onClick={handleMenuToggle}
          title="Menu"
        >
          <div className="w-[20px] h-[2px] block bg-black dark:bg-white group-hover:bg-primary dark:group-hover:bg-darkprimary"></div>
          <div className="w-[20px] h-[2px] block bg-black dark:bg-white group-hover:bg-primary dark:group-hover:bg-darkprimary"></div>
        </div>
        <nav className="absolute right-24 top-[250px] hidden md:block">
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
        </nav>
        {isMenuVisible && (
          <nav>
            <MenuHeader handleMenuClose={handleMenuClose} key="menu" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
