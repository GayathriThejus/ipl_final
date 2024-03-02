import About from "./components/About";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Events from "./components/Events";
import { CarouselDefault } from "./components/CarouselDefault";
import Cards from "./components/Cards";
function App() {
  return (
    <div>
    <Hero />
    <About />
    <Counter />
    <Gallery /> 
    {/* <Events/>  */}
    {/* <CarouselDefault/> */}
    <Cards/> 
    <Timeline />
    <Footer />
    </div>
  );
}

export default App;
