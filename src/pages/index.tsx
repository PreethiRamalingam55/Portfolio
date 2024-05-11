import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import Homepage from "@/components/home";

export default function Home() {
  return (
    <div>
        <Homepage />
    </div>
  );
}

Home.getLayout = getLayout;
