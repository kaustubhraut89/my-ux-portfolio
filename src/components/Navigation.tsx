import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const timer = setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
      // Clear navigation state so it doesn't scroll again on manual refresh
      navigate("/", { replace: true, state: {} });
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const handleNavClick = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick("hero")}
            className="font-heading text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            Kaustubh Raut
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:inline-flex px-5 py-2.5 bg-foreground text-primary-foreground text-sm font-medium rounded-full hover:bg-accent transition-colors duration-300"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
