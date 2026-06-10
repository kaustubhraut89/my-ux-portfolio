import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kaustubh Raut | UX Designer & Strategist</title>
        <meta
          name="description"
          content="UX Designer crafting intuitive digital experiences. View my portfolio of user-centered design work for leading tech companies."
        />
      </Helmet>

      <Navigation />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
