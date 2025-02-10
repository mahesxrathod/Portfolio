import React from "react";

function Project() {
  const projects = [
    {
      title: "Tomato - Food Delivery",
      description:
        "Delicious food, delivered fast! 🚀🍔 Order your favorite meals with ease and enjoy fresh flavors at your doorstep. ",
      image: "images/tomato.png",
      techStack: ["HTML", "CSS", "React"],
      link: "https://github.com/mahesxrathod/Food-Delivery-Website",
    },
    {
      title: "Murait Technology - IT Hub",
      description:
        "Empowering businesses with technology! Scalable, secure, and smart IT solutions.",
      image: "images/murait.png",
      techStack: ["HTML", "Tailwind CSS", "React"],
      link: "https://github.com/mahesxrathod/murait-technology",
    },
    {
      title: "HBC Pharma - medical site ",
      description:
        "Innovation in medicine, care in every dose! Delivering quality healthcare solutions.",
      image: "images/hbc.png",
      techStack: ["HTML", "CSS", "Bootstrap"],
      link: "https://github.com/mahesxrathod/JS-project",
    },
  ];
  return (
    <>
      <div id="project" className="container mx-auto p-6 mt-[70px]">
        <h2 className="text-5xl font-extrabold text-center mb-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 "
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 text-sm my-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="bg-black text-white hover:bg-white hover:text-[#23486A] text-sm font-bold py-2.5 px-5.5 flex-nowrap rounded-md relative inline-block mt-4 border-2"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
