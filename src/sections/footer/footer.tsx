

const Footer = () => {
    
    const onContactDeveloper = () => {
        window.open(encodeURI(`https://wa.me/59892780063`), '_blank');
    }


    return <footer className="w-full bg-[#091d28] text-white font-poppinsLight text-center p-4 mt-10    ">
        <p>© 2025 - Estefani Feirer</p>
        <p className="text-sm">Desarrollado por Rodrigo Barbieri - <a href="#" className="underline" onClick={onContactDeveloper}>+59892780063</a></p>
    </footer>;
};

export default Footer;