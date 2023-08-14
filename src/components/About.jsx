import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          I thrive in optimizing UIs with Tailwind CSS, using its utility-first
          approach to streamline development while maintaining a sleek and
          polished design. This approach allows me to create visually appealing
          interfaces without sacrificing performance.
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
