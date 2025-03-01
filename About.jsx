import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-24 text-center bg-blue-950">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-5xl font-bold text-purple-500 mb-6">About Me</h2>
        <p className="text-blue-200 text-xl mb-6 leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-purple-400">Mir Issa Ellia</span>,
          a passionate copywriter with a keen eye for crafting persuasive and
          engaging content. My journey into copywriting is fueled by a love for
          storytelling and an understanding of what makes words work. Every
          piece I write is designed to inform, inspire, and drive action.
        </p>
        <p className="text-blue-200 text-xl mb-6 leading-relaxed">
          Whether it’s website content, ads, or sales copy, I specialize in
          turning ideas into powerful words that resonate. I thrive on creating
          compelling narratives that elevate brands and make their messages
          unforgettable.
        </p>
        <p className="text-blue-200 text-xl leading-relaxed">
          My mission is simple: to help businesses connect with their audience
          through words that convert. If you’re looking for someone who can
          bring your brand’s voice to life, let’s create something remarkable
          together!
        </p>
      </div>
    </section>
  );
};

export default About;
