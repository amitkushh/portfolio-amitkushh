import Image from "next/image";
import React from "react";
import Project from "../../../public/project.png";

function Cards() {
  const Projects = [
    {
      image: (
        <Image
          src={Project}
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
          alt="ecommerce"
        />
      ),
      title: "Ecommerce",
    },
    {
      image: (
        <Image
          src={Project}
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
          alt="portfolio"
        />
      ),
      title: "Portfolio web",
    },
    {
      image: (
        <Image
          src={Project}
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
          alt="new design"
        />
      ),
      title: "New design",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10">
      {Projects.map((project, index) => (
        <div
          className="flex flex-col gap-4 bg-[#292929] rounded-xl "
          key={index}
        >
          <div className="flex flex-col">
            <div className="mb-6">{project.image}</div>
            <span className="text-xl font-bold pl-4">{project.title}</span>
          </div>
          <div className="flex justify-between items-center mx-4 pb-4">
            <button className="text-md  bg-gray-900 text-white rounded-md py-1 px-3">
              Preview
            </button>
            <button className="text-md  bg-gray-900 text-white rounded-md py-1 px-3">
              Repo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
