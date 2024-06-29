import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import DashBoard from "../Pages/DashBoard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/*" element={<DashBoard />} />
        {/* <Route path="/" element={<DashBoard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
