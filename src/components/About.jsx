import React from "react";
import Header from "./Header";

function About() {
  return (
    <>
      <section className="flex flex-col sm:flex-row   mt-[70px] p-14  rounded-3xl mx-12 bg-[#23486A]">
        <div>
          <img
            className="w-full lg:w-md md:w-96 sm:w-2xl items-center"
            src="images/avatar.png"
            alt=""
          />
        </div>
        <div className="lg:mx-auto my-auto ">
          <h1 className="font-bold text-5xl lg:text-6xl md:text-5xl sm:text-xl text-white pb-4 text-wrap">
            About me
          </h1>
          <div className="text-[#FFDD55] text-nowrap text-sm lg:text-3xl md:text-md sm:text-md font-semibold pb-4 ">
            <p>Web Designer</p>
            <p>React Devloper</p>
          </div>
          <div>
            <p className="text-white text-wrap font-semibold text-md block lg:text-2xl w-full max-w-xl italic text-justify">
              Hello! I'm a Front-end Devloper. Dive into my portfolio to
              discover a fusion of elegant design and seamless development.
              Welcome to a world where creativity meets functionality!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
