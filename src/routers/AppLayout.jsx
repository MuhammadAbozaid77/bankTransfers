import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-[100vh]">
      <Outlet />
    </div>
  );
}
