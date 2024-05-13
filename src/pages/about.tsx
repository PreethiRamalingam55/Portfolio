import React from "react";
import { getLayout } from "@/components/layouts/layouts";
export default function About() {
  return (
    <div className="container flex flex-col justify-center  h-screen">
      <h1 className="text-5xl font-semibold text-gray-700 dark:text-darkprimary uppercase my-5 relative">
        About
        <span className="absolute bottom-0 left-0 bg-primary h-1 w-10"></span>
      </h1>

      <p className="leading-loose max-w-4xl text-xl">
        Hey, I'm VarunRaja, known as Varun on social media. I'm a full stack
        developer and front-end web developer. I enjoy creating portraits and
        universes inspired by what I listen to, and I'm always eager to explore
        new technologies and creative coding. Additionally, I have a passion for
        reading Mahuwa.
      </p>

      <a href="/Varunraja(Resume).pdf" target="_blank" className="my-5 text-2xl">Curriculum Vitae</a>
    </div>
  );
}

About.getLayout = getLayout;
