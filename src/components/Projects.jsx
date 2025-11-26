import React from "react";
import blogImg from "../assets/projects/blog.jpg";
import chatImg from "../assets/projects/chat.jpg";
import ecommerceImg from "../assets/projects/ecommerce.jpg";
import apiImg from "../assets/projects/itegrated api.webp";
import posImg from "../assets/projects/pos.webp";
import portfolioImg from "../assets/projects/portfolio.png";

const projectsData = [
  {
    id: 1,
    title: "Integrated API Project",
    description: "A project demonstrating API integration with React frontend.",
    image: apiImg,
    link: "#",
  },
  {
    id: 2,
    title: "POS System",
    description: "A modern point-of-sale system for retail management.",
    image: posImg,
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce App",
    description:
      "Full-stack e-commerce application built with React and Node.js.",
    image: ecommerceImg,
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blog platform with user authentication and CRUD operations.",
    image: blogImg,
    link: "#",
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application using Socket.io and React.",
    image: chatImg,
    link: "#",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Portfolio application using Framer Motion and React.",
    image: portfolioImg,
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
