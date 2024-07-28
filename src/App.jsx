import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Roadmap, Partner, Projects, Team, Contact, StarsCanvas } from "./components";
import { LanguageProvider } from "./LanguageContext";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Navbar />
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-[100%]">
            <Hero />
          </div>
          <About />
          <Projects />
          <Partner />
          <Team />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
