import About from "./About";
import AboutSection from "./AboutSection";
import Career from "./Career";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import TopButton from "./TopButton";

const Content = () => (
  <div className="w-full bg-slate-900">
    <About />
    <AboutSection />
    <div className="w-full bg-gradient-to-b from-slate-900 to-gray-900">
      <Skills />
      <Career />
      <Projects />
      <ContactSection />
    </div>
    <TopButton />
    <Footer />
  </div>
);

export default Content;
