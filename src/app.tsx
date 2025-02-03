import { Banner } from "./components/banner";
import { CustomerReviews } from "./components/customer-reviews";
import EcoHelth from "./components/Eco-helth";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import HaveAquestion from "./components/have-question";
import { Header } from "./components/header";
import Ingredients from "./components/ingredients";
import { Packages } from "./components/packages";
import { Satisfaction } from "./components/satisfaction";
import SellingFast from "./components/sellingFast";
import SubSection from "./components/SubSection";
import { TestimonialSection } from "./components/Testimonial";
import { TheProblem } from "./components/the-problem";
import { TheSolution } from "./components/the-solution";
import { WhyItWorks } from "./components/why-it-works";
import { WhyUrinaryFormula } from "./components/why-urinary-formula";
import { Element } from 'react-scroll';

export function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <Banner />
      <div className="bg-gradient-to-b from-white to-[#EEF7FF]  pb-4">
        <TheProblem />
        <TheSolution />
      </div>
      <TestimonialSection />
      <EcoHelth />
      <WhyUrinaryFormula />
      <EcoHelth />
      <WhyItWorks />
      <Ingredients/>
      <Satisfaction />
      <Element name="packages"><Packages /></Element>
      <SellingFast />
      <Faq />
      <SubSection/>
      <CustomerReviews />
      <HaveAquestion />
      <Footer />
    </div>
  );
}
