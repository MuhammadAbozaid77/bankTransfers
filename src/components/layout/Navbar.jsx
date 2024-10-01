import Logo from "./Logo";
import Wrapper from "../Wrapper";

export default function Navbar({ setIsAuth }) {
  const handelLogout = () => {
    setIsAuth(false);
  };
  return (
    <Wrapper>
      <nav className="flex justify-between items-center">
        <Logo />

        <button
          onClick={handelLogout}
          className="border rounded-lg bg-yellow-600 hover:bg-yellow-500 duration-200 font-bold py-2 px-5 text-[18px]"
        >
          Logout
        </button>
      </nav>
    </Wrapper>
  );
}
