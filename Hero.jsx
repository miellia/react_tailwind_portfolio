import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-20 px-6 md:px-20 max-w-7xl mx-auto"
    >
      {/* Left Section - Hero Text */}
      <div className="md:w-1/2">
        {/* Hero Heading */}
        <h1 className="text-5xl font-bold text-purple-500 mb-4">
          Words That Sell, Stories That Stick
        </h1>

        {/* Hero Subtext */}
        <p className="text-blue-300 text-lg mb-6">
          I'm Mir Issa Ellia, a professional copywriter helping brands turn
          ideas into compelling words that engage, convert, and inspire.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#portfolio"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          See My Work
        </a>
      </div>

      {/* Right Section - Hero Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/dp.jpg" // Profile Picture
          alt="Profile"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Hero;
