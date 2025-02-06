import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";

import UpArrow from "./images/up-arrow.svg";
import Button from "./components/button/button";
import MyWork from "./sections/my-work/my-work";

function App() {
  const [returnTopVisible, setReturnTopVisible] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setReturnTopVisible(true);
      } else {
        setReturnTopVisible(false);
      }
    });

  }, []);

  return (
    <main className="relative">
      <Header />
      <Hero />

      <Services />

      <MyWork />

      <hr className="w-20 mt-10 m-auto border-gray-400" />

      <Contact/>

      <Footer />

      {returnTopVisible && (
        <Button
          img={UpArrow}
          initial={{ right: 0 }}
          animate={{ right: 10 }}
          exit={{ right: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#091d28] h-13 rounded-full w-fit fixed p-4 right-5 bottom-15"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        />
      )}
    </main>
  );
}

export default App;
