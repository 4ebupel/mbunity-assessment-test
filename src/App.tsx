import { useLocation } from "react-router-dom";
import { Burger } from "./components/Burger/Burger";
import { ContactUsPage } from "./components/ContactUsPage/ContactUsPage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  // The whole useLocation thing is just to make 
  // it possible to use mobile burger menu

  const { hash } = useLocation();

  const isMenuOpen = hash.includes('#menu');

  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="App">
      <Header />
      <Burger isVisible={isMenuOpen} />
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default App;
