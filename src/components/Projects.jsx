const Projects = () => {
  return (
    <div className="w-11/12 mx-auto my-4 p-4 shadow-md bg-white shadow-gray-600">
      <h2 className="text-center text-2xl font-bold">Projects</h2>
        <div className="my-5 p-2  flex justify-evenly flex-wrap">
          <div className="my-3 p-2  shadow-lg shadow-gray-500">
            <div className="w-80 h-60 mx-auto my-2 border rounded-lg p-1">image</div>
            <div className="flex justify-center">
              <p className="text-sm mx-2 p-2 border rounded-lg">React</p>
              <p className="text-sm mx-2 p-2 border rounded-lg">Tailwind</p>
            </div>
          </div>
          <div className="my-3 p-2  shadow-lg shadow-gray-500">
          <div className="w-80 h-60 mx-auto my-2 border rounded-lg p-1">image</div>
            <div className="flex justify-center">
              <p className="text-sm mx-2 p-2 border rounded-lg">React</p>
              <p className="text-sm mx-2 p-2 border rounded-lg">Tailwind</p>
            </div>
          </div>
          <div className="my-3 p-2  shadow-lg shadow-gray-500">
          <div className="w-80 h-60 mx-auto my-2 border rounded-lg p-1">image</div>
            <div className="flex justify-center">
              <p className="text-sm mx-2 p-2 border rounded-lg">React</p>
              <p className="text-sm mx-2 p-2 border rounded-lg">Tailwind</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projects;
