import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "../scrollprogresbar";

const SiteLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
       <div className="rounded small-rounded"></div>
       <div className="rounded big-rounded"></div>
        <Header />
     
      <main
        className="relative flex-grow dark:bg-[#0e1012] dark:text-white"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <ScrollProgress />
      {/* <Footer /> */}
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);

export default SiteLayout;
