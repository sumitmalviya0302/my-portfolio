import { Outlet, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="bg-gray-100 py-3">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/projects',
        element:<Projects />
      },
      {
        path:'/contact',
        element:<Contact />
      }
    ]
  },
  
])

export default AppRouter
