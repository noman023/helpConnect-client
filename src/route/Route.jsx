import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import AllVolunteerPost from "../pages/AllVolunteerPost/AllVolunteerPost";
import MyPosts from "../pages/MyPosts/MyPosts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/allPost",
        element: <AllVolunteerPost />,
      },
      {
        path: "/addPost",
        element: <AddVolunteerPost />,
      },
      {
        path: "/postDetails/:id",
        element: <VolunteerPostDetails />,
      },
      {
        path: "/myPosts",
        element: <MyPosts />,
      },
    ],
  },
]);

export default routes;
