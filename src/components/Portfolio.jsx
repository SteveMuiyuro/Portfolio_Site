
import Quizzical from "../assets/portfolio/Quizzical.png";
import Resume from "../assets/portfolio/Resume.png";
import Ecommerce from "../assets/portfolio/ecommerce-store.png";
import JobSite from  "../assets/portfolio/Job-Site.png"
import EventsQue from "../assets/portfolio/eventsque.png"
import Petcare from "../assets/portfolio/petcare.png"
export default function Portfolio() {
  const portfolios = [

    {
      id: 1,
      src: Petcare,
      codeUrl: "https://github.com/SteveMuiyuro/petsoft",
      liveUrl: "https://petsoft-psi.vercel.app/",
      name: "Pet Care",
    },

    {
      id: 2,
      src: JobSite,
      codeUrl: "https://github.com/SteveMuiyuro/remDev",
      liveUrl: "https://remotedeveloperjobs.netlify.app/",
      name: "Job-Site",
    },

    {
      id: 3,
      src: EventsQue,
      codeUrl: "https://github.com/SteveMuiyuro/eventsque",
      liveUrl: "https://eventsque.vercel.app/",
      name: "Events Que"

    },

    {
      id: 4,
      src: Ecommerce,
      codeUrl: "https://github.com/SteveMuiyuro/Project_OnlineStore",
      liveUrl: "https://daintystore.netlify.app/",
      name: "Online Store",
    },
    {
      id: 5,
      src: Resume,
      codeUrl: "https://github.com/SteveMuiyuro/Project_Resume_Builder",
      liveUrl: "https://projectresumebuilder.netlify.app/",
      name: "Resume Builder",
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-60">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map(({ id, src, name }) => (
            <div key={id} className=" flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg">
            <div className="flex flex-col justify-between">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />


            </div>
                <p className="text-center p-5 mt-auto font-bold">{name}</p>

              <div className="flex  items-center justify-center">
                <div className="flex  items-center justify-center">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
