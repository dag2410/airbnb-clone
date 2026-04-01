import { Outlet } from "react-router-dom";
import Header from "../DefaultLayout/components/Header";

const NoFooterLayout = () => {
  return (
    <>
      <Header type={"sub"} />
      <main className="max-w-screen-2xl mx-auto ">
        <Outlet />
      </main>
    </>
  );
};
export default NoFooterLayout;
