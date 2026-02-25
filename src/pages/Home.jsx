import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import CaseStudy from "../components/CaseStudy";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <FAQ />
      <CaseStudy />
      <Testimonials />
      <Footer />
    </>
  );
}