import { RouterProvider } from "react-router-dom";
import Navigations from "./routers/Navigations";

//-----------------------------------------------------------
export default function App() {
  // if (!isAuth) {
  //   return (
  //     <>
  //       <div className="rounded-md h-[100vh] flex justify-center items-center flex-col">
  //         <Login
  //           setIsAuth={setIsAuth}
  //           setIsError={setIsError}
  //           setIsLoading={setIsLoading}
  //           isLoading={isLoading}
  //           isError={isError}
  //           setAccountPinNmuber={setAccountPinNmuber}
  //         />
  //       </div>
  //     </>
  //   );
  // }
  // return (
  //   <div>
  //     <Navbar setIsAuth={setIsAuth} />
  //     <Details pin={accountPinNmuber} />
  //   </div>
  // );

  return (
    <>
        <Navigations />
    </>
  );
}
