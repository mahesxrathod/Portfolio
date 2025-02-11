import React from "react";

function Footer() {
  return (
    <>
      <section className="mt-[75px]">
        <div className="text-2xl text-center font-bold mb-6">
          <h2>@MAHESH RATHOD</h2>
        </div>
        <div className="text-2xl font-semibold text-center italic text-wrap w-full max-w-md mx-auto mb-10">
          <p>
            I Make as soon as Possible. You really like my work contact me and
            let's Work Together.
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-9">
          <a href="https://www.instagram.com/mahesxrathod/">
            <img
              className="w-11 transform hover:scale-130 transition duration-300"
              src="images/instagram.png"
              alt=""
            />
          </a>
          <a href="https://x.com/Mayllo268738">
            <img
              className="w-10 transform hover:scale-130 transition duration-300"
              src="images/twitter.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/mahesh-rathod-002576282/">
            <img
              className="w-10 transform hover:scale-130 transition duration-300"
              src="images/linkedin.png"
              alt=""
            />
          </a>
          <a href="https://github.com/mahesxrathod">
            <img
              className="w-10 transform hover:scale-130 transition duration-300"
              src="images/github.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <hr className="font-extrabold" />
        </div>
        <div className="text-center my-6">
          <p className="text-md tracking-wide">CopyRight © 2025 <span className="text-gray-700">Mahesh Rathod</span></p>
        </div>
      </section>
    </>
  );
}

export default Footer;
