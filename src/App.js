import About from "./components/About";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Fade from 'react-reveal/Fade'
function App() {
  return (
    <div>
    <Fade>
    <Hero/>
    <About/>
    <Counter/>
    <Gallery/>
    <Timeline/>
    </Fade>
    <Footer/>
    </div>
  );
}

export default App;
