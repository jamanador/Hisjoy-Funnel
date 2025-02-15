import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import NewFooter from "../components/NewFooter";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <Outlet/>
        <NewFooter/>
    </div>
  )
}
