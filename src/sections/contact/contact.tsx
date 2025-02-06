
import WhatsApp from '../../images/contact/whatsapp.svg';
import Email from '../../images/contact/email.svg';
import ContactMediaButton from '../../components/contact-media-button/contact-media-button';

import { InstagramEmbed } from 'react-social-media-embed';

const Contact = () => {


    const openWhatsapp = () => {
        const message = '¡Hola!, estoy interesado en tus servicios de fotografía, por favor, ponte en contacto conmigo.';
        window.open(encodeURI(`https://wa.me/59898609838/?text=${message}`), '_blank');
    }

    const openEmail = () => {
        const message = '¡Hola!, estoy interesado en tus servicios de fotografía, por favor, ponte en contacto conmigo.';
        window.open(encodeURI(`mailto:rbarbieriperez@gmail.com?subject=Consulta&body=${message}`), '_blank');
    }

    return <section className="flex flex-col mt-6 gap-y-3">

        <div className=''>
            <div className='flex flex-col gap-y-2'>
                <h1 className="font-poppinsBold text-2xl text-center">Contacto</h1>
                <p className="font-poppinsNormal w-[90%] m-auto text-gray-500 text-center md:w-[60%]">Por consultas y presupuestos, puedes contactarme a través de los siguientes medios (sin costo las 24hs):</p>
            </div>

            <div className='flex flex-col gap-y-1 w-[15rem] m-auto mt-10 md:flex-row md:gap-x-4 md:w-[60%] lg:w-[40%]'>
                <ContactMediaButton onClick={openWhatsapp} className='bg-[#25d366] basis-[50%]' icon={WhatsApp} label="Vía WhatsApp" />
                <ContactMediaButton onClick={openEmail} className='bg-blue-400 basis-[50%]' icon={Email} label="Vía Email" />
            </div>
        </div>

        <hr className="w-20 mt-10 m-auto border-gray-400"/>

        <div className=''>
            <div className='flex flex-col gap-y-2'>
                <h1 className="font-poppinsBold w-[90%] m-auto text-center text-2xl mt-6">Enterate de todas mis novedades</h1>
                <p className="font-poppinsNormal w-[90%] m-auto text-gray-500 text-center md:w-[60%]">Siempre anuncio los eventos en los cuales estaré participando en mis redes sociales.</p>
            </div>
            <div className='mt-6 sm:w-[80%] lg:w-[60%] m-auto xl:w-[40%]'>
                <InstagramEmbed url="https://www.instagram.com/estefifeirer/"  />
            </div>

        </div>
        
    </section>;
};


export default Contact;