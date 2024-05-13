import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import Homepage from "@/components/home";
import Meta from "@/components/ui/meta";
export default function Home() {
  return (
    <div>
        <Meta title={'Varun'} />
        <Homepage />
    </div>
  );
}

Home.getLayout = getLayout;
