import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import Homepage from "@/components/home";
import Aboutpage from "@/components/about/about";
import Skillpage from "@/components/skill";
import Contactpage from "@/components/contact";
import Educations from "@/components/educations";
export default function Home() {
  return (
    <div>
        <div id="home">
          <Homepage />
        </div>
        <div id="about">
          <Aboutpage />
        </div>
        <div id="skill">
          <Skillpage />
        </div>
        <div id="expereince">
          <Educations />
        </div>
        <div id="contact">
          <Contactpage />
        </div>
    </div>
  );
}

Home.getLayout = getLayout;
