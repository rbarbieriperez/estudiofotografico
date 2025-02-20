import { motion } from "motion/react";
import Profile from "../../images/profile.webp";
import Quotes from "../../images/quotes.svg";
import HeroMobile from '../../images/heroMobile.mp4'
import HeroTablet from '../../images/heroTablet.mp4';
import HeroDesktop from '../../images/heroDesktop.mp4';

const Hero = () => {
  return (
    <section className="text-white relative pb-8 bg-[#091d28] grid grid-cols-1 gap-y-4 md:grid-cols-2 md:px-8 lg:px-20 overflow-hidden">
      <video width={"100%"} height={"100%"} className="absolute sm:hidden w-full h-full object-cover" src={HeroMobile} autoPlay loop muted playsInline></video>
      <video width={"100%"} height={"100%"} className="absolute hidden w-full h-full object-cover sm:block" src={HeroTablet} autoPlay loop muted playsInline></video>
      <video width={"100%"} height={"100%"} className="absolute hidden w-full h-full object-cover md:block" src={HeroDesktop} autoPlay loop muted playsInline></video>
      
      <div className="z-10 mt-20">
          <img
            src={Profile}
            className="w-48 m-auto rounded-xl md:w-64"
            alt="Profile image"
          />
          <h1 className="m-auto w-fit text-xl font-poppinsBold mt-6">
            ESTEFANI FEIRER
          </h1>
          <p className="w-fit m-auto font-poppinsLight">Fotógrafa profesional</p>
      </div>
      <div className="z-10 md:mt-20">

        <hr className="border-white w-10 m-auto mt-4 md:hidden" />

        <div className="w-[90%] m-auto rounded-2xl mt-6 p-6 flex flex-col gap-y-4 bg-[#0C2A3E]">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}  className="w-6 justify-self-start" src={Quotes} alt="Quotes" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="text-white text-center font-poppinsRegular italic">
            "Soy testigo de cada aventura, capturo el sentimiento y revelo la realidad de cada historia."
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

