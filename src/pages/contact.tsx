import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import ContactForm from "@/components/contact";
import Meta from "@/components/ui/meta";
export default function Contact() {
  return (
    <>
      <div className="container flex flex-col justify-center lg:h-screen relative">
        <Meta title={'Contact'} />
        <ContactForm />
      </div>
    </>
  );
}

Contact.getLayout = getLayout;
