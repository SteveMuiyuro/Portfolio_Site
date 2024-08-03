import { FaBars, FaTimes } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (

        <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-10">
      <div>
        <h1 className=" text-lg md:text-5xl font-inter ml-2">Steve <span className="text-emerald-400 font-semibold">Mwangi</span></h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-emerald-400 hover:scale-105 duration-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-[#e5e7eb] hover:py-1.5 hover:px-2 rounded-sm "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => {
          setNav((prev) => !prev);
        }}
      >
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ link, id }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6">
              <Link
                onClick={() => setNav((prev) => !prev)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>


  );
};

export default NavBar;
