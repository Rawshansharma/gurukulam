import Aboutus from "./components/Aboutus"
import AdmissionForm from "./components/AdmissionForm";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <Aboutus/>,
  },
  {
    path : "/admission",
    element:<AdmissionForm/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

function App() { 
  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />

    </>
  )
}

export default App
