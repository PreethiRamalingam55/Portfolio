import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import Typewriter from "typewriter-effect";
import About from "@/components/about/about";
export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-no-repeat w-full dark:bg-[url('')] ">
        <div className="container flex flex-col justify-center h-screen">
          <h1 className="text-3xl my-2">Hello, I am</h1>
          <h2 className="text-6xl">
            Varun{" "}
            <span className="text-primary dark:text-darkprimary">Raja</span>
          </h2>
          <h3 className="text-6xl my-2 flex gap-2">
            And I am a{" "}
            <div className="text-primary dark:text-darkprimary">
              <Typewriter
                options={{
                  strings: ["FullStack Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  style: "color: red",
                }}
              />
            </div>
          </h3>
        </div>
      </div>
      <About />
    </div>
  );
}

Home.getLayout = getLayout;
