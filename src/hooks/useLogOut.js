import { useNavigate } from "react-router-dom";

export default function useLogOut() {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("bankTransfersAccount");
    navigate("/login");
  };

  return { handelLogout };
}
