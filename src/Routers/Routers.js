import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import Appiontment from "../Banner/Appiontment/Appiontment";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/appiontment',
            element:<Appiontment></Appiontment>

          }
        ]
        
    }
 ])