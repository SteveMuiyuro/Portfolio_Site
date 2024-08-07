import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import reactImg from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";

export default function Experience() {
  const stacks = [
    { id: 1, src: html, title: "Html", style: "shadow-orange-500" },
    { id: 2, src: css, title: "Css", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "Javascript", style: "shadow-yellow-500" },
    { id: 4, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 5, src: node, title: "Node", style: "shadow-green-400" },
    { id: 6, src: reactImg, title: "React", style: "shadow-blue-600" },
    { id: 7, src: typescript, title: "Typescript", style: "shadow-blue-500" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: nextjs, title: "Nextjs", style: "shadow-gray-600" },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen md:pt-80"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-80">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">My Tech Stack</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {stacks.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="Steve Mwangi" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
