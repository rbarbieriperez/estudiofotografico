
interface IContactMediaButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: string;
    className?: string;
}


const ContactMediaButton = ({
    label = '',
    icon = '',
    className = '',
    ...props
}: IContactMediaButton) => {
    return <button {...props} className={`w-full p-2 cursor-pointer hover:scale-105 flex gap-x-2 text-white font-poppinsLight rounded-2xl ${className}`}>
        <img className="w-8" src={icon} alt="Button icon" />
        <span className="self-center">{label}</span>
    </button>
}

export default ContactMediaButton;