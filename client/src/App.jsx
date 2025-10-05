import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import ValueProposition from "./sections/ValueProposition";
import BestSellers from "./sections/BestSellers";
import ForYou from "./sections/ForYou";
import OurStory from "./sections/OurStory";
import Newsletter from "./sections/Newsletter";

//shirts
import shirt2 from "./assets/shirt2.png";
import shirt3 from "./assets/shirt3.png";
import shirt4 from "./assets/shirt4.png";
import shirt5 from "./assets/shirt5.png";
import shirt6 from "./assets/shirt6.png";

const OPTIONS = { loop: true };
const SHIRTS = [
  {
    name: "Be the Change | Oversized Tee",
    image: shirt4,
    price: "PHP 198.00",
  },
  {
    name: "Savoir-faire | Oversized Tee",
    image: shirt2,
    price: "PHP 198.00",
  },
  {
    name: "Let Go and Let Grow | Oversized Tee",
    image: shirt5,
    price: "PHP 198.00",
  },
  {
    name: "Stay True Stay You | Oversized Tee",
    image: shirt3,
    price: "PHP 198.00",
  },
  {
    name: "Take the Leap | Oversized Tee",
    image: shirt6,
    price: "PHP 198.00",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProposition />
      <BestSellers slides={SHIRTS} options={OPTIONS}/>
      <ForYou />
      <OurStory />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
