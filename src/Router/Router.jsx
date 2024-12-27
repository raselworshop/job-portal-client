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
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";
import AllJobs from "../Pages/AllJobs";

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
        path: '/all-jobs',
        element: <AllJobs/>
      },
      {
        path: 'jobs/jobs-details/:id',
        element: <PrivateRoute>
          <JobDetails />,
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://job-portal-server-jet-six.vercel.app/jobs/jobs-details/${params.id}`)
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
        path: 'recruiter/posted-job',
        element: <PrivateRoute>
          <MyPostedJobs/>
        </PrivateRoute>
      },
      {
        path: 'recruiter/view-applications/:job_Id',
        element: <PrivateRoute>
          <ViewApplications/>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://job-portal-server-jet-six.vercel.app/recruiter/view-applications/${params.job_Id}`)
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