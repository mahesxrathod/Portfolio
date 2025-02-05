import React from "react";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-5 items-center mt-[70px] px-12 ">
        <div>
          <div className="font-extrabold lg:text-6xl md:text-6xl text-4xl leading-[40px] text-wrap">
            <h1 className="pb-3 lg:pb-7">Hello,</h1>
            <h1>I'm Mahesh </h1>
          </div>
          <div>
            <p className="py-4 font-semibold text-xl">Front-end Devloper</p>
            <a
              href="/mahesh_resume.pdf"
              download="mahesh_resume.pdf"
              className="bg-black text-white font-bold py-2 px-4.5 flex-nowrap rounded-md relative inline-block"
            >
              Download Resume
              <span className="absolute inset-0 shadow-[5px_5px_0px_0px_rgba(0,198,174)] rounded-md z-10 "></span>
            </a>
          </div>
        </div>
        <div className="basis-1/2 flex-1 flex flex-col  items-end">
          <img
            className="w-2/2 sm:w-2/3 md:w-3/4 lg:w-3/6 h-auto items-center"
            src="images/avatar.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;


