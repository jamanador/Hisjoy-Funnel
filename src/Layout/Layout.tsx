import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
