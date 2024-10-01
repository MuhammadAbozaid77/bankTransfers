import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AppLayout from "./AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Navigations() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={"home"} />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}
