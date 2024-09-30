//-----------------------------------------------------------
import { useState } from "react";
import Details from "./components/Details";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import MainPage from "./MainPage";
export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [accountPinNmuber, setAccountPinNmuber] = useState(false);

  if (!isAuth) {
    return (
      <>
        <div className="rounded-md h-[100vh] flex justify-center items-center flex-col">
          <Login
            setIsAuth={setIsAuth}
            setIsError={setIsError}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            isError={isError}
            setAccountPinNmuber={setAccountPinNmuber}
          />
        </div>
      </>
    );
  }
  return (
    <div>
      <Navbar setIsAuth={setIsAuth} />
      <Details pin={accountPinNmuber} />
    </div>
  );
}
