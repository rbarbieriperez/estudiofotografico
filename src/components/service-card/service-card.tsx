
import { motion } from "motion/react";

interface IServiceCard {
  title?: string;
  desc?: string;
  img?: string;
}

const ServiceCard = ({ title = "", desc = "", img = "" }: IServiceCard) => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1.5 }}
    className="flex flex-col w-full gap-y-2 items-center rounded-lg shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.1)] p-4">
      <img className="w-12" src={img} alt="Service Card Img" />
      <h3 className="font-poppinsRegular bg-red1">{title}</h3>
      <p className="font-poppinsLight">{desc}</p>
    </motion.div>
  );
};

export default ServiceCard;
