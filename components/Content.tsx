import About from "./About";
import Career from "./Career";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import TopButton from "./TopButton";

const Content = () => (
  <div className="bg-slate-900">
    <About />
    <div className="bg-gradient-to-b from-slate-900 to-gray-900">
      <Career />
      <Skills />
      <Projects />
    </div>
    <TopButton />
    <Footer />
  </div>
);

export default Content;
