import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Layout } from "./components/layouts/Layout";
import { HeroSection } from "./components/HeroSection";
import { SolutionSection } from "./components/SolutionSection";
import PricingSlider from "./components/PricingSection";
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <HeroSection/>
        <SolutionSection/>
        <PricingSlider/>
      </Layout>
    </Router>
  );
};

export default App;
