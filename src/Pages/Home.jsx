import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Services from "../Components/Our services/Services";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
