import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Array containing project details
const projects = [
  {
    id: 1,
    title:
      "Revamping Product Descriptions for Maximum Conversion: Crafting Engaging Copy for a Streetwear Brand",
    description:
      "I transformed bland product descriptions into compelling, conversion-focused copy for a streetwear brand targeting Gen Z and millennials. By using bold hooks, highlighting unique selling points, and maintaining the brand’s cool, confident voice, I created engaging copy that resonated with the audience and drove urgency to increase sales.",
    image: "/copy1.png", // Image path
    pdf: "/pdfs/Copy - Revamping Product Descriptions for Maximum Conversion Crafting Engaging Copy for a Streetwear Brand.pdf", // PDF download link
  },
  {
    id: 2,
    title:
      "Crafting Engaging Career Growth Messaging: Persuasive Copy for Mentorship Platform",
    description:
      "I helped a mentorship platform revamp their website copy to better connect with their target audience—young professionals seeking career growth. By refining the headline, subheadline, and calls-to-action (CTAs), I created a more compelling and emotionally engaging message.",
    image: "/copy2.png",
    pdf: "Copy - Crafting Engaging Career Growth Messaging Persuasive Copy for Mentorship Platform.pdf",
  },
  {
    id: 3,
    title: "NeonKick – Step Into the Future with Bold, Futuristic Sneakers",
    description:
      "I crafted a compelling product description for NeonKick, a sneaker brand focused on futuristic designs, neon aesthetics, and unparalleled comfort. The CTA emphasizes urgency with limited stock, encouraging immediate action and sparking excitement around the brand's innovative approach.",
    image: "/copy3.png",
    pdf: "Copy - NeonKick – Step Into the Future with Bold, Futuristic Sneakers.pdf",
  },
];

const Portfolio = () => {
  // State to track the current slide index
  const [current, setCurrent] = useState(0);

  // Function to navigate to the previous slide
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  // Function to navigate to the next slide
  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section id="portfolio" className="py-12 bg-blue-950 text-center">
      <h2 className="text-4xl font-bold text-purple-500 mb-6">My Work</h2>
      <div className="relative w-4/5 mx-auto overflow-hidden">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* Mapping through projects to display each project */}
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-[350px] h-auto mx-auto rounded-lg object-cover border-4 border-purple-500"
              />
              <h3 className="text-xl font-semibold mt-4 text-purple-400">
                {project.title}
              </h3>
              <p className="text-blue-200 mt-2">{project.description}</p>
              <a
                href={project.pdf}
                download
                className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
              >
                Download Copy
              </a>
            </div>
          ))}
        </div>
        {/* Previous slide button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition"
        >
          <FaArrowLeft className="text-white" />
        </button>
        {/* Next slide button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition"
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
