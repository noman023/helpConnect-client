import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../../providers/AuthContext";
import SpinnerComponent from "../../components/Spinner/Spinner";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <SpinnerComponent />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
}
