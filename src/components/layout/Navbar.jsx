import Logo from "./Logo";
import Wrapper from "../ui/Wrapper";
import { NavLink } from "react-router-dom";

export default function Navbar({ setIsAuth }) {
  const handelLogout = () => {
    setIsAuth(false);
  };

  const links = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Transfer",
      path: "/transfer",
    },
    {
      name: "Request",
      path: "/request",
    },
    {
      name: "Help",
      path: "/help",
    },
    {
      name: "Find",
      path: "/find",
    },
  ];
  return (
    <Wrapper>
      <nav className="flex justify-between items-center border-b-[2px] border-gray-300 h-[100px]">
        <Logo />

        <div className="flex justify-center items-center gap-5 ">
          {links?.map((el) => {
            return (
              <NavLink
                to={el?.path}
                key={el?.path}
                className={
                  "font-bold text-[20px] text-gray-500 hover:text-gray-800 duration-150 hover:bg-gray-200 p-2 rounded-md"
                }
              >
                {el?.name}
              </NavLink>
            );
          })}
        </div>

        <button
          onClick={handelLogout}
          className="border rounded-lg bg-gray-600 hover:bg-gray-500 duration-200 font-bold py-2 px-5 text-[18px] text-white"
        >
          Logout
        </button>
      </nav>
    </Wrapper>
  );
}
