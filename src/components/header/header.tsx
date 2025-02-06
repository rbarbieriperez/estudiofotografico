import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Menu from "../../images/menu.svg";
import Logo from "../../images/white-logo.png";

const Header = () => {
  const [open, isOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  const goToSection = (section: "services" | "my-work" | "buy" | "contact") => {
    const isMobile = window.innerWidth < 1024;
    switch (section) {
      case "services":
        window.scrollTo({ top: 440, left: 0, behavior: "smooth" });
        break;
      case "my-work":
        window.scrollTo({ top: isMobile ? 1250 : 830, left: 0, behavior: "smooth" });
        break;
      case "buy":
        window.open("https://www.lumepic.com/estefifeirer", "_blank");
        break;
      case "contact":
        window.scrollTo({ top: isMobile ? 1980 : 3100, left: 0, behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      className={`bg-[#091d28] flex items-center justify-between flex-wrap z-1001 ${
        scrolled ? "fixed w-full" : ""
      }`}

      initial={{ padding: 0 }}
      animate={scrolled ? { paddingLeft: "2rem", paddingRight: "2rem" , paddingTop: "1rem", paddingBottom: "1rem" } : { paddingLeft: "1rem", paddingRight: "1rem" }}
      transition={{ duration: .5 }}
    >
      <img
        src={Logo}
        alt="Page logo"
        width={100}
        height={100}
        className="w-32"
      />

      {/** MOBILE */}
      <div className="md:hidden">
        <img
          src={Menu}
          alt="Menu"
          width={100}
          height={100}
          className="w-10 cursor-pointer"
          onClick={() => isOpen(!open)}
        />
      </div>

      {open && (
        <AnimatePresence>
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.1 }}
            className={`text-white bg-[#091d28] z-1001 flex flex-col gap-y-2 top-[2.5rem] left-0 w-full basis-[100%] py-2 absolute md:hidden ${
              scrolled ? "top-[3.5rem] px-6" : "px-2"
            }`}
          >
            <li><a href="#" className="font-poppinsLight p-2 hover:rounded-2xl" onClick={() => goToSection("services")}>Servicios</a></li>
            <li><a href="#" className="font-poppinsLight p-2 hover:rounded-2xl" onClick={() => goToSection("my-work")}>Mi trabajo</a></li>
            <li><a href="#" className="font-poppinsLight p-2 hover:rounded-2xl" onClick={() => goToSection("buy")}>Comprar</a></li>
            <li><a href="#" className="font-poppinsLight p-2 hover:rounded-2xl" onClick={() => goToSection("contact")}>Contacto</a></li>
          </motion.ul>
        </AnimatePresence>
      )}

      {/** DESKTOP */}
      <nav className="hidden md:block text-white">
        <a
          className="font-poppinsLight p-2 hover:bg-[#0C2A3E] hover:rounded-2xl"
          onClick={() => goToSection("services")}
          href="#"
        >
          Servicios
        </a>
        <a
          className="font-poppinsLight p-2 hover:bg-[#0C2A3E] hover:rounded-2xl"
          onClick={() => goToSection("my-work")}
          href="#"
        >
          Mi trabajo
        </a>
        <a
          className="font-poppinsLight p-2 hover:bg-[#0C2A3E] hover:rounded-2xl"
          onClick={() => goToSection("buy")}
          href="#"
        >
          Comprar
        </a>
        <a
          className="font-poppinsLight p-2 hover:bg-[#0C2A3E] hover:rounded-2xl"
          onClick={() => goToSection("contact")}
          href="#"
        >
          Contacto
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
