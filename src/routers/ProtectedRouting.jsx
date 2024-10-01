import { Navigate } from "react-router-dom";

export default function ProtectedRouting({ children }) {
  const isAuth = localStorage.getItem("bankTransfersAccount") || true;
  // console.log("isAuth", isAuth);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
