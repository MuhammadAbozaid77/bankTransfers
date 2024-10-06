import { useContext } from "react";
import { ContextValue } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, error, setError, checkAccountLogIn } =
    useContext(ContextValue);

  const handelLogin = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      const validate = checkAccountLogIn(
        Number(data?.pinNumber),
        String(data?.password)
      );
      if (validate === undefined) {
        setIsLoading(false);
        setError("Password Or Email Is Wrong");
      } else {
        localStorage.setItem("bankTransfersAccount", data?.pinNumber);
        setIsLoading(false);
        setError("");
        navigate("/home");
      }
    }, 2000);
  };

  return { handelLogin, isLoading, error };
}
