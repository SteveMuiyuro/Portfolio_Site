import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 mt-80 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          What sets me apart is not only my technical prowess, but also my
          strong collaborative spirit. I thrive in team environments where I can
          contribute ideas, seek feedback, and learn from my peers. I am an
          adaptable problem-solver, always eager to take on challenges and find
          innovative solutions to complex coding and design puzzles.
        </p>
        <br />
        <p className="text-xl">
          As a team player, I value open communication and collaboration. I'm
          always eager to learn from experienced developers and contribute my
          ideas to create innovative solutions.With a strong appetite for
          learning, I'm excited to stay updated with the latest industry trends
          and tools to continuously evolve my skill set. My goal is to
          contribute effectively to projects that make a positive impact and to
          grow into a well-rounded front-end developer.
        </p>
      </div>
    </div>
  );
}
