import React from "react";
import Header from "./Header";

function About() {
  return (
    <>
      <div className="bg-[#23486A]">
        <section
          id="about"
          className="flex flex-col sm:flex-row  mt-[70px] p-14 lg:mx-20 mx-6  md:gap-5 lg:gap-16"
        >
          <div>
            <img
              className="w-full lg:w-md md:w-96 sm:w-2xl items-center"
              src="images/avatar.png"
              alt=""
            />
          </div>
          <div className="my-auto">
            <h1 className="font-extrabold text-2xl lg:text-6xl md:text-4xl text-white lg:pb-4 pb-2 text-nowrap">
              About me
            </h1>
            <div className="text-[#FFDD55] text-nowrap text-sm lg:text-xl md:text-xl sm:text-md font-semibold lg:pb-4 pb-2 ">
              <p>Web Designer</p>
              <p>React Devloper</p>
            </div>
            <div>
              <p className="text-white text-wrap font-semibold text-sm block lg:text-2xl md:text-xl w-full max-w-xl italic text-justify">
                Hello! I'm a Front-end Devloper. Dive into my portfolio to
                discover a fusion of elegant design and seamless development.
                Welcome to a world where creativity meets functionality!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
