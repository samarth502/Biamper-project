import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import Features from "./components/Features";
import Services from "./components/Services";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import FeaturesTwo from "./components/FeaturesTwo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative border-b-8 border-b-sky-500">
      <Logo></Logo>
      <Hero></Hero>
      <Services></Services>
      <FeaturesTwo></FeaturesTwo>
      <Features></Features>
      <Stats></Stats>
      <FeaturedIn></FeaturedIn>
      <Testimonial></Testimonial>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  );
}

export default App;
