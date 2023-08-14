import Gfox from "../assets/portfolio/Gfox.png";
import Quizzical from "../assets/portfolio/Quizzical.png";
import Resume from "../assets/portfolio/Resume.png";
import Library from "../assets/portfolio/Library.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: Gfox,
      codeUrl: "https://github.com/SteveMuiyuro/Project_Gfox_Logistics",
      liveUrl: "https://gfoxlogistics.netlify.app/",
    },
    {
      id: 2,
      src: Quizzical,
      codeUrl: "https://github.com/SteveMuiyuro/Project_Quizzical",
      liveUrl: "https://project-quizzical.netlify.app/",
    },
    {
      id: 3,
      src: Resume,
      codeUrl: "https://github.com/SteveMuiyuro/Project_Resume_Builder",
      liveUrl: "https://projectresumebuilder.netlify.app/",
    },
    {
      id: 4,
      src: Library,
      codeUrl: "https://github.com/SteveMuiyuro/Project_E-Fork-Library",
      liveUrl: "https://eforklibrarly.netlify.app/",
    },
  ];

  function handleCodeClick(id) {
    portfolios.map((port) =>
      port.id === id ? window.open(port.codeUrl) : null
    );
  }

  function handleLiveClick(id) {
    portfolios.map((port) =>
      port.id === id ? window.open(port.liveUrl) : null
    );
  }
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleLiveClick(id)}
                >
                  Live
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(id)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
