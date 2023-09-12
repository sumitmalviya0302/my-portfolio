
const Home = () => {
  return (
    <main className="w-11/12 mx-auto box-border bg-white shadow-md  shadow-gray-600 my-4 p-5 ">
      <div className="  mx-auto text-center p-5">
        <p className=" font-semibold my-2 text-3xl">Hey &#x2c;</p>
        <div className="w-60 rounded-full mx-auto my-2 border border-black drop-shadow-lg shadow-lg ">
          <img
            src="src/assets/image.jpg"
            alt="image"
            className="w-60 rounded-full mx-auto  "
          />
        </div>

        <h1 className="text-3xl font-semibold my-2">I&#39;m Sumit</h1>
        <h2 className="text-3xl font-semibold my-2 text-blue-700">
          React.js Developer
        </h2>
        <button className=" p-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200">
          Resume
        </button>
        <div className=" p-2 my-1 w-32 mx-auto flex justify-center">
          <a href="https://github.com/sumitmalviya0302" target="_blank" rel="noopener noreferrer">
          <img
            src="src/assets/github.png"
            alt="github"
            className="w-8 h-8 cursor-pointer"
          />
          </a>
          
          <a
            href="https://www.linkedin.com/in/sumit-malviya-187723169/" target="_blank" rel="noopener noreferrer">
            <img
            src="src/assets/linkedin.png"
            alt="linkedin"
            className="w-8 h-8 cursor-pointer"
          />
          </a>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
