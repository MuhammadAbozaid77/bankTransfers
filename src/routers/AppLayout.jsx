import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Wrapper from "../components/ui/Wrapper";

export default function AppLayout() {
  return (
    <div className="h-[calc(100vh-100px)]">
      <Navbar />
      <Wrapper classesName={"my-[20px]"}>
        <Outlet />
      </Wrapper>
    </div>
  );
}
