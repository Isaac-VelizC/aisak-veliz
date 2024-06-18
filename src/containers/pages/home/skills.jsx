import { motion } from "framer-motion";
import "./styles/cardSkills.css";
import { Link } from "react-router-dom";
import tools from "services/skills";

function SectionSkills() {
  return (
    <div className="relative h-auto lg:h-screen flex items-center">
      <div className="w-full mt-[5rem] lg:mt-0 text-colorDarkPrimary dark:text-colorLigthPrimary">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-6xl font-bold">Habilidades</span>
        </motion.div>
        <div className="py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((item) => (
            <Link to={item.href} key={item.id} className="p-1 relative w-[11rem] lg:w-[14rem] h-[8rem] lg:h-[10rem]">
              {/*<div className="dot"></div>*/}
              <div className="card">
                <div className="font-bold text-[1.2rem]">{item.name}</div>
                <img src={item.img} alt="" width={30} />
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionSkills;
