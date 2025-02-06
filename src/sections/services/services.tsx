import ServiceCard from "../../components/service-card/service-card";
import { motion } from "framer-motion";

import Bicycle from '../../images/services/bicycle.svg';
import Party from '../../images/services/party.svg';
import Camera from '../../images/services/camera.svg';

const Services = () => {
    return <section className="text-center">

        <div className="mt-6 flex flex-col gap-y-2">
            <h2 className="font-poppinsBold text-2xl">Servicios</h2>
            <hr className="w-10 m-auto border-gray-200"/>
            <p className="font-poppinsBold text-gray-400">A medida</p>
        </div>

        <motion.div viewport={{ once: true }} className="w-[90%] mt-8 grid grid-cols-1 sm:w-[70%] md:grid-cols-3 md:w-[80%] gap-4 justify-center m-auto">
            <ServiceCard
                title="Eventos deportivos"
                desc="Si hay algun evento deportivo del cual te gustaría que participe no dudes en contactarme."
                img={Bicycle}
            />

            <ServiceCard
                title="Eventos privados"
                desc="Me desempeño como fotógrafa de eventos privados. Asistiendo a cumpleaños, casamientos o cualquier ceremonia."
                img={Party}
            />

            <ServiceCard
                title="Sesiones de fotografía"
                desc="Me desempeño como fotógrafa profesional. Asistiendo a sesiones de fotos para cualquier ocasión."
                img={Camera}
            />
        </motion.div>

    </section>
}

export default Services;