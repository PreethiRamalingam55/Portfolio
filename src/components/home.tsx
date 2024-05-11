import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { CgSoftwareDownload } from "react-icons/cg";
export default function Home() {
  return (
    <div
      data-aos="fade-in"
      className="w-full dark:bg-gradient-to-r from-darkprimary/20 to-darksecondary"
    >
      <div className="h-screen relative container grid grid-col-1 md:grid-cols-2 justify-center items-center gap-10 md:gap-20">
        <span className="font-caveat h-full absolute left-auto bottom-0 z-[-1] w-full text-[250px] md:text-[300px] opacity-5 font-semibold">
          Web Developer
        </span>
        <div className="span-col-4 order-2 md:order-1">
          <Image
            src="/assets/images/varun.jpeg"
            alt="Varun's Image"
            className="rounded-full w-72 md:w-72 mx-auto"
            width={300}
            height={300}
          />
        </div>
        <div className="span-col-7 flex flex-col justify-center item md:h-screen order-1 md:order-2">
          <h1
            data-aos="fade-in"
            className="mt-20 md:mt-0 text-2xl md:text-3xl my-3"
          >
            Hello, I am
          </h1>
          <h2 data-aos="fade-in" className="text-4xl md:text-6xl ">
            Varun{" "}
            <span className="text-gradient dark:text-gradient font-bold">
              Raja
            </span>
          </h2>
          <h3 className="text-4xl md:text-6xl my-3 ">
            And{" "}
            <span className="text-gradient dark:text-gradient font-bold">
              I'm
            </span>
          </h3>
          <div data-aos="fade-in" className="text-3xl md:text-6xl my-3 text-gradient dark:text-gradient font-bold">
            {/* <Typewriter
                options={{
                  strings: ["FrontEnd Developer", "BackEnd Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              /> */}
            <h5>FullStack Developer</h5>
          </div>
          <button className="my-3 bg-primary dark:bg-darkprimary rounded-full w-40 p-3 text-white hover:bg-secondary">
            <a
              href="/Varunraja(Resume).pdf"
              download
              className="flex gap-2 items-center justify-center"
            >
              <span>Get Resume</span>
              <CgSoftwareDownload className="w-6 h-6" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
