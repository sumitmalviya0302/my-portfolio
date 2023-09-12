import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="w-11/12 mx-auto  my-2 p-5  text-center shadow-md shadow-gray-600 bg-white "><Link to='/'>Portfolio&#46; <span className="font-bold text-xl hover:text-blue-700">Sumit Malviya</span></Link></div>
  )
}

export default Footer