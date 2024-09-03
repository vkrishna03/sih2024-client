import React from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default LandingLayout;
