import { CustomerReviews } from "./components/customer-reviews";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="font-montserrat max-w-2xl mx-auto">
      <Header />
      <CustomerReviews />
    </div>
  );
}
