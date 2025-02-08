import React from "react";
import Header from "./Header";

function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col sm:flex-row gap-5 items-center mt-[100px] px-12 "
      >
        <div>
          <div className="font-extrabold lg:text-7xl md:text-6xl text-5xl  text-wrap">
            <h1 className="pb-3 lg:pb-8">Hello,</h1>
            <h1>I'm Mahesh </h1>
          </div>
          <div>
            <p className="py-4 font-semibold text-xl">Front-end Devloper</p>
            <a
              href="/mahesh_resume.pdf"
              download="mahesh_resume.pdf"
              className=" bg-black text-white hover:bg-white hover:text-black text-xl  font-bold py-3 px-5.5 flex-nowrap rounded-md relative inline-block "
            >
              Download Resume
              <span className="absolute inset-0 shadow-[6px_5px_0px_0px_rgba(0,198,174)] rounded-md z-10 "></span>
            </a>
          </div>
        </div>
        <div className="basis-1/2 flex-1 flex flex-col  items-end">
          <img
            className="w-2/2 sm:w-2/3 md:w-3/4 lg:w-3/7 mt-6 h-auto object-contain sm:items-center rounded-3xl shadow-[7px_7px_8px_3px_rgba(24,24,26)]"
            src="images/maheshprofile.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
