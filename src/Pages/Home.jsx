import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Services from "../Components/Our services/Services";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-2">
        <Banner></Banner>
        <Services></Services>
        <AboutUs></AboutUs>
        <Gallery></Gallery>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
