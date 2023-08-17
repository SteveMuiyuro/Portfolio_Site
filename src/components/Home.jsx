import React from "react";
import myImage from "/src/assets/profile_photo.png";
import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-7xl font-bold text-white m pt-20">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            With a blend of creativity and technical proficiency, I excel at
            translating design concepts into interactive and dynamic web
            applications. My expertise lies in crafting responsive,
            high-performance user interfaces that provide seemless user
            experience.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mb-10"
            >
              View Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <PiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="pb-20">
          <img
            src={myImage}
            alt="my profile"
            className="rounded-2xl mx-auto v-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
}
