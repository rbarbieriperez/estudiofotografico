import { motion } from "framer-motion";
import { HTMLMotionProps } from "motion/react";

interface IButton extends HTMLMotionProps<"button"> {
    className?: string;
    img?: string;
    label? :string;
}

const Button = ({ className = '', img = '', label = '', ...props }: IButton) => {
    return <motion.button type="button"  className={`p-2 cursor-pointer hover:scale-105 flex gap-x-2 text-white font-poppinsLight rounded-2xl ${className}`} {...props}>
        {img && <img className="w-6" src={img} alt="Button icon" />}
        {label && <span className="self-center">{label}</span>}
    </motion.button>
}

export default Button