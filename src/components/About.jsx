import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-11/12 mx-auto my-4 p-4 shadow-md shadow-gray-500 bg-white">
      <h2 className="text-2xl font-bold text-center">About Me</h2>
      <p className="text-center mt-1 mb-3 p-2">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="flex justify-center flex-wrap mx-10 my-3 ">
        <div className=" w-96 p-2 mx-2 my-3 rounded-2xl border-black shadow-lg shadow-gray-500">
          <p className=" text-xl p-2">Get to Know Me &#33;</p>
          <div className="mt-1">
            <p className="px-1 py-2">
              Hello, I&#39;m{" "}
              <span className="text-lg font-bold text-blue-700">
                React.js Developer
              </span>{" "}
              from Sirohi,Rajasthan with{" "}
              <span className="text-lg font-bold">1&#43; years</span> of
              experience, building the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the{" "}
              <span className="text-lg font-bold cursor-pointer">
                <Link to="/projects">Projects</Link>
              </span>{" "}
              section.
            </p>
            <p className="px-1 py-2">
              I&#39;m open to <span className="text-lg font-bold">job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don&#39;t hesitate to{" "}
              <span className="text-lg font-bold cursor-pointer">
                <Link to="/contact">Contact</Link>
              </span>{" "}
              me.
            </p>
          </div>
        </div>
        <div className=" w-96 p-2 mx-2 my-3 rounded-2xl border-black shadow-lg shadow-gray-500">
          <p className=" text-xl p-2">Skills</p>
          <div className="flex jusitfy-between flex-wrap  w-auto h-auto">
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">Html</p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">CSS</p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">
              {" "}
              Javascript
            </p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">
              React.js
            </p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">
              Redux
            </p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">
              Tailwind css
            </p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">
              Material UI
            </p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">GIT</p>
            <p className="border p-2 mx-2 my-2 rounded-lg bg-gray-100 ">
              Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
