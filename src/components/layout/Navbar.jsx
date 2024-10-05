import Logo from "./Logo";
import Wrapper from "../ui/Wrapper";
import { NavLink } from "react-router-dom";
import { links } from "../../services/navbarLinks";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
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

        <LogoutButton />
      </nav>
    </Wrapper>
  );
}
