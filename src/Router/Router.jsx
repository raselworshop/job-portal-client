import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Opps! desired page not found</h2>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;