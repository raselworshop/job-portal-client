import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Opps! desired page not found</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'jobs/jobs-details/:id',
        element: <PrivateRoute>
          <JobDetails />,
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/jobs-details/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute>
          <JobApply />
        </PrivateRoute>
      },
      {
        path: 'myApplications',
        element:<PrivateRoute>
          <MyApplication/>
        </PrivateRoute>,
      },
      {
        path: 'recruiter/add-job',
        element: <PrivateRoute>
          <AddJob/>
        </PrivateRoute>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      }
    ]
  },
]);

export default router;