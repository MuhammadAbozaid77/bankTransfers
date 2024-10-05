import { useState } from "react";
import Logo from "../components/layout/Logo";
import { accounts } from "../accounts";
import SpinnerLoading from "../components/ui/SpinnerLoading";
import Error from "../components/ui/Error";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userPinNumber, setUserPinNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handelLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const validate = accounts.find((item) => {
        return (
          item?.pinNumber === Number(userPinNumber) &&
          item?.password === String(userPassword)
        );
      });
      if (validate === undefined) {
        setIsLoading(false);
        setIsError("Password Or Email Is Wrong");
      } else {
        localStorage.setItem("bankTransfersAccount", userPinNumber);
        setIsLoading(false);
        setIsError("");
        navigate("/home");
      }
    }, 2000);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    handelLogin();
  };
  return (
    <>
      <div className="min-w-[400px] bg-white px-8 py-[30px] rounded-[10px]  border border-gray-300 shadow-md flex flex-col">
        {isLoading && <SpinnerLoading />}
        {isError && <Error error={isError} />}

        <h1 className="text-[40px] text-center">Login</h1>

        <Logo />
        <form onSubmit={handelSubmit}>
          <div className="mb-5 flex flex-col justify-center">
            <label htmlFor="" className="text-[16px] font-semibold">
              Pin Number
            </label>
            <input
              placeholder="Pin Number"
              value={userPinNumber}
              onChange={(e) => setUserPinNumber(e.target.value)}
              type="number"
              name=""
              className="p-3 border rounded-lg bg-gray-200 focus:outline-gray-400  text-gray-600 text-[16px] font-semibold"
            />
          </div>
          <div className="mb-5  flex flex-col justify-center">
            <label htmlFor="" className="text-[16px] font-semibold">
              Password
            </label>
            <input
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              name=""
              className="p-3 border rounded-lg bg-gray-200 focus:outline-gray-400  text-gray-600 text-[16px] font-semibold"
            />
          </div>
          <div className="mb-5 flex flex-col justify-center gap-1">
            <button
              type="submit"
              className="p-4 border rounded-lg text-[20px] font-bold bg-gradient-to-tl from-green-700 to-green-400 hover:from-green-800 hover:to-green-500 text-white duration-500 transition-all"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
