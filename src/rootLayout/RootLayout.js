import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="relative font-travel bg-primary overflow-hidden text-white">

      <Outlet />

      <div className="absolute left-[-45px] bottom-[-45px] w-[200px] h-[200px] bg-ellipse rounded-full blur-[90px]"></div>
    </section>
  );
};

export default RootLayout;
