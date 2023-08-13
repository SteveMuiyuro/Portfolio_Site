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
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          ipsam laboriosam aliquam eaque nemo, illum ut sint, quibusdam,
          necessitatibus aspernatur iusto distinctio doloremque? Obcaecati hic
          libero impedit illum ipsa unde blanditiis sint? Nesciunt veritatis a
          eum tempore, quis tempora consectetur facere, sunt maiores
          reprehenderit expedita est assumenda quam inventore numquam.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          odio fugiat eum dolores dicta praesentium animi ratione repellendus
          magni quia? Asperiores deleniti quas, perferendis voluptas velit
          dolores tempore. Labore, debitis. Illum et aperiam animi, consectetur
          nam quaerat quod temporibus quidem hic minus commodi rerum
          exercitationem optio, obcaecati, incidunt perspiciatis nostrum!
        </p>
      </div>
    </div>
  );
}
