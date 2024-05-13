import React from "react";
import { getLayout } from "@/components/layouts/layouts";
import ContactForm from "@/components/contact";
export default function Contact() {
  return (
    <>
      <div className="container flex flex-col justify-center lg:h-screen relative">
        <ContactForm />
      </div>
    </>
  );
}

Contact.getLayout = getLayout;
