import React from "react";
import Header from "./Header";

function About() {
  return (
    <>
      <section className="flex flex-col sm:flex-row gap-8  mt-[70px] p-14 rounded-3xl mx-12 bg-[#3B6790]">
        <div>
          <img
            className="w-full lg:w-md md:w-96 sm:w-2xl items-center"
            src="images/avatar.png"
            alt=""
          />
        </div>
        <div className="mx-auto my-auto text-justify">
          <h1 className="font-bold text-5xl  lg:text-7xl md:text-5xl sm:text-5xl text-white pb-5 text-nowrap">
            About me
          </h1>
          <div className="text-[#FFDD55] text-nowrap text-2xl lg:text-3xl md:text-md sm:text-md font-semibold pb-5">
            <p>Web Designer</p>
            <p>React Devloper</p>
          </div>
          <div>
            <p className="text-white text-wrap font-semibold text-md block lg:text-2xl w-full max-w-xl italic">Hello! I'm a Front-end Devloper. Dive into my portfolio to discover a fusion of elegant design and seamless development. Welcome to a world where creativity meets functionality!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
