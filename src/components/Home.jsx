import React from "react";
import myImage from "/src/assets/my-photo.jpg";
import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-scroll";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-7xl font-bold text-white m pt-20">
          Fullstack <span className="text-emerald-400">Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            With a blend of AI Engineering and technical proficiency, I excel at
            translating design concepts into interactive and dynamic web
            applications. My passion lies in crafting high performant AI driven end-to-end applications, that provide efficient and lasting solutions to the end user.
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
          {/* <img
            src={myImage}
            alt="Steve Mwangi"
            className="rounded-2xl mx-auto v-2/3 md:w-full rounded-lg "
          /> */}
          <Analytics/>
        </div>
      </div>
    </div>
  );
}
