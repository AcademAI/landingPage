import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Products } from "./components";
import { LanguageProvider } from "./LanguageContext";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About/>
          <Products/>
          {/*<Contact/>*/}
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
