import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AppLayout from "./AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRouting from "./ProtectedRouting";
import Transfer from "../pages/Transfer";
import Request from "../pages/Request";
import Help from "../pages/Help";
import Find from "../pages/Find";
import Save from "../pages/Save";
import Withdrawal from "../pages/Withdrawal";
import Transactions from "../pages/Transactions";

export default function Navigations() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route
          element={
            <ProtectedRouting>
              <AppLayout />
            </ProtectedRouting>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          {/* <Route path="transactions" element={<Transactions />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="request" element={<Request />} />
          <Route path="help" element={<Help />} />
          <Route path="find" element={<Find />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="save" element={<Save />} />
        <Route path="withdrawal" element={<Withdrawal />} />
      </Routes>
    </HashRouter>
  );
}
