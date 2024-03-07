import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="w-full max-w-[70rem] mr-auto ml-auto">
      <Header />
      <Outlet />
    </div>
  );
}
