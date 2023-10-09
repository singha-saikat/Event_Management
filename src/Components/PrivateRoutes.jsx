import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  const loaction = useLocation();
  console.log(loaction);
  if(loading){
    return <span className="loading loading-dots loading-lg"></span>
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
