import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`relative inline-flex justify-center items-center group transition-opacity ease-linear duration-300 opacity-${
          isVisible ? "100" : "0"
        }`}
      >
        <div className="scroll-to-top-btn group group-hover:bg-secondary group-hover:scale-110">
          <FaArrowUp />
        </div>
        <p className="fixed bottom-32 right-20 capitalize leading-loose transform rotate-[-90deg] text-primary">
          back to top
        </p>
      </button>
    </>
  );
};

export default ScrollToTopButton;
