import React from 'react'
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { CgSoftwareDownload } from "react-icons/cg";
export default function Home() {
  return (
    <div className="bg-cover bg-no-repeat w-full">
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
              />
            </div>
            <button className="my-3 bg-primary rounded-full w-40 p-3 text-white hover:bg-secondary">
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
  )
}
