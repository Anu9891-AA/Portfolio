import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Starfield from "./starfield";

export default function App() {
  return (
    <div>
      <Starfield />
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Work /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
