import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import Typewriter from "typewriter-effect";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-no-repeat w-full dark:bg-[url('')] ">
        <div className="container flex flex-col md:flex-row justify-center items-center md:gap-32">
          <div>
            <Image
              src="/assets/images/varun.jpeg"
              alt="Varun's Image"
              className="rounded-full"
              width={500}
              height={500}
            />
          </div>
          <div className="container flex flex-col justify-center h-screen">
            <h1 className="text-xl md:text-3xl my-3">Hello, I am</h1>
            <h2 className="text-3xl md:text-6xl">
              Varun{" "}
              <span className="text-primary dark:text-darkprimary">Raja</span>
            </h2>
            <h3 className="text-3xl md:text-6xl my-3">And I am a </h3>
            <div className="text-3xl md:text-6xl my-3 text-primary dark:text-darkprimary">
              <Typewriter
                options={{
                  strings: ["FrontEnd Developer", "BackEnd Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
                wrapperClassName="typewriter-style"
              />
            </div>
            <button className="my-3 bg-primary rounded-full w-32 p-3 text-white">
              <a href="/Varunraja(Resume).pdf" download>
                Get Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = getLayout;
