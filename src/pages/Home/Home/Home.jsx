import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Projects from "../project/Projects";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto overflow-hidden">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
