import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import Meta from "@/components/ui/meta";
import AboutPage from "@/components/about/about";
export default function About() {
  return (
    <div className="container flex flex-col justify-center lg:h-screen relative">
      <Meta title={'About'} />
      <AboutPage />
    </div>
  );
}

About.getLayout = getLayout;
