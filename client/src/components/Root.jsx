import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function () {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}