import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
