import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import AllVolunteerPost from "../pages/AllVolunteerPost/AllVolunteerPost";
import MyPosts from "../pages/MyPosts/MyPosts";
import MyVolunteerRequest from "../pages/MyVolunteerRequest/MyVolunteerRequest";
import AddVolunteerPostPage from "../pages/AddVolunteerPostPage/AddVolunteerPostPage";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AllVolunteerPost />,
          </PrivateRoute>
        ),
      },
      {
        path: "/addPost",
        element: (
          <PrivateRoute>
            <AddVolunteerPostPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/postDetails/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPosts",
        element: (
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/myRequests",
        element: (
          <PrivateRoute>
            <MyVolunteerRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
