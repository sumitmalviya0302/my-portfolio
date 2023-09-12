const Contact = () => {
  return (
    <div className="w-11/12 mx-auto my-4 p-3 shadow-md shadow-gray-600 bg-white">
      <h2 className="text-2xl text-center font-bold">Contact Me</h2>
      <p className="text-center my-3 text-lg">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>

      <div className="my-3 w-[700px] mx-auto  p-3 shadow-lg shadow-gray-500">
        <div className="p-2  my-2">
          <h2 className="my-1 ">Name</h2>
          <input type="text" placeholder="Enter Your Name" className="px-2 py-4 outline-none  w-[600px] my-1 bg-gray-100 rounded-lg"/>
        </div>
        <div className="p-2  my-2">
          <h2 className="my-1 ">Email</h2>
          <input type="text" placeholder="Enter Your Email" className="px-2 py-4 outline-none  w-[600px] my-1 bg-gray-100 rounded-lg"/>
        </div>
        <div className="p-2  my-2">
          <h2 className="my-1 ">Message</h2>
          <input type="text" placeholder="Enter Your Message" className="px-2 py-4 outline-none  w-[600px]  my-1 bg-gray-100 rounded-lg"/>
        </div>
        <div className="p-2  my-2">
        <button className="px-2 py-4    bg-blue-700 rounded-lg text-white text-sm font-bold my-3 items-center">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
