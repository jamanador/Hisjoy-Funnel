import { Toaster } from "react-hot-toast";
import Routes from "./Routes/Routes";

export function App() {
  return (
    <div className="font-montserrat px-1 overflow-x-hidden">
      <div className="flex-grow">
        <Routes />
        <Toaster />
      </div>
    </div>
  );
}
