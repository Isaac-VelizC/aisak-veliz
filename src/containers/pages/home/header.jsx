import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ButtonPrimary from "components/Button/buttonPrimary";
import { Link } from "react-router-dom";

function SectionHeader({ contactMeRef, socials }) {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const data = {
    submessage: "¡Estoy aquí para dar vida a tus ideas en el mundo digital!",
  };

  const downloadDocument = () => {
    const link = document.createElement("a");
    link.href = "ruta/de/tu/documento.pdf";
    link.download = "IsaacVeliz_hoja-de-vida.pdf";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex items-center justify-center flex-grow">
        <div className="space-y-2">
          <div className="flex justify-center text-center font-normal text-colorDarkFour dark:text-colorLigthFour">
            {data && data.submessage}
          </div>
          <div className="flex justify-center font-bold text-[20px] md:text-[40px] text-colorDarkPrimary dark:text-colorLigthPrimary">
            <Typewriter
              words={["Laravel and ReactJS, developer"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="flex justify-center p-6 gap-4">
            <ButtonPrimary
              type="button"
              title="Download CV"
              event={downloadDocument}
            />
            <ButtonPrimary
              type="button"
              title="Contact Me"
              event={() => {
                scrollToRef(contactMeRef);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start px-8 pb-6 lg:pb-12 gap-8">
        {socials.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className=" bg-colorLigthPrimary rounded-xl shadow-xl py-1 px-1"
          >
            <motion.img
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src={item.img}
              alt={item.name}
              width={30}
              height={30}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SectionHeader;
