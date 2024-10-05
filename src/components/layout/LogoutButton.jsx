import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("bankTransfersAccount");
    navigate("/login");
  };

  return (
    <>
      <button
        onClick={handelLogout}
        className="border rounded-lg bg-gray-600 hover:bg-gray-500 duration-200 font-bold py-2 px-5 text-[18px] text-white"
      >
        Logout
      </button>
    </>
  );
}
