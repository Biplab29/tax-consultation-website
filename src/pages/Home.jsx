import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Consultation from "../components/Consultation";
import Blog from "../components/Blog";
import Support from "../components/Support";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="about" className="scroll-mt-24">
        <WhyChooseUs />
      </section>

        <Process />

      <section id="blog" className="scroll-mt-24">
        <Blog />
      </section>

        <Consultation />

      <section id="contact" className="scroll-mt-24">
        
        <Support />
        <Footer />
      </section>

      

    </>
  );
};

export default Home;
