import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Contact } from "./components";
import { LanguageProvider } from "./LanguageContext";
import { heroImage } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative z-0 bg-primary">
          <div
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <Navbar />
            <Hero />
          </div>
          <About/>
          <Experience/>
          {/*<Contact/>*/}
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
