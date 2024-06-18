import Card from "components/Card/card";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";

function SectionServices() {
  return (
    <div className="relative h-auto md:h-screen flex items-center">
      <div className="mt-[5rem] lg:mt-0">
        <motion.div
          className="text-center text-colorDarkPrimary dark:text-colorLigthPrimary"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-6xl font-bold">Servicios</span>
        </motion.div>
        <div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-20">
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0  }}
                    transition={{ duration: 1 }}>
                    <Card
                        id={1}
                        emoji={<HiMiniDevicePhoneMobile/>}
                        heading={"Aplicaciones Móviles"}
                        detail={"Desarrollo aplicaciones móviles personalizadas para Android con enfoque en la experiencia del usuario."}
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0  }}
                    transition={{ duration: 2 }}>
                    <Card
                        id={2}
                        emoji={<FaCode/>}
                        heading={"Desarrollo Web"}
                        detail={"Me especializo en crear sitios web, que abarcan desde páginas estáticas hasta plataformas interactivas."}
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0  }}
                    transition={{ duration: 3 }}>
                    <Card
                        id={3}
                        emoji={<TbWorld/>}
                        heading={"UI/UX"}
                        detail={"Diseño interfaces intuitivas y atractivas, desde el aspecto visual hasta la funcionalidad y usabilidad."}
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
            </div>
      </div>
    </div>
  );
}

export default SectionServices;
