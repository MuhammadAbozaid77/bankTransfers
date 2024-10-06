import { Navigate } from "react-router-dom";
import useGetLocalStorage from "../hooks/useGetLocalStorage";

export default function ProtectedRouting({ children }) {
  const { isAuthenticated } = useGetLocalStorage();

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
