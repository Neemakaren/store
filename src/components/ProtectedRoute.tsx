import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = () => {
  const isLoggedin = useAppSelector((state) => state.authReducer.isLoggedIn);
  return isLoggedin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
