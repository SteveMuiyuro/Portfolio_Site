export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-80">
        <div className="pb-8">
          <p className="text-4xl font-hold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Please Reach Out</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/66d8ff92-9670-4c46-8715-c4bd40fa066a"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <input
              type="email"
              name="name"
              placeholder="Enter Your email"
              className="p-2 bg-transparent border-2 text-white focus:outline-none my-4"
            />
            <textarea
              name="message"
              placeholder="Input Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
