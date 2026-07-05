import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
