import React from "react";
import Header from "./Header";

function About() {
  return (
    <>
      <Header />
      <section className="flex flex-col sm:flex-row gap-8  mt-[70px] p-14 rounded-3xl mx-12 bg-[#106ee8]">
        <div>
          <img
            className="w-96 lg:w-md md:w-96 sm:w-2xl items-center"
            src="images/avatar.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl  lg:text-7xl md:text-5xl sm:text-5xl text-white pb-5 text-nowrap">
            About me
          </h1>
          <div className="text-[#FFDD55] text-nowrap text-2xl lg:text-3xl md:text-md sm:text-md font-semibold pb-5">
            <p>Web Designer</p>
            <p>React Devloper</p>
          </div>
          <div>
            <p className="text-white text-wrap font-semibold text-2xl">Hello! I'm a UI/UX designer and Flutter developer. Dive into my portfolio to discover a fusion of elegant design and seamless Flutter development. Welcome to a world where creativity meets functionality!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
