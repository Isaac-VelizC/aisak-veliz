import "./styles/cardProjects.css";
import { motion } from "framer-motion";

function SectionProjects({ projects, url }) {
  return (
    <div className="relative  h-auto md:h-screen flex justify-center items-center">
      <div className="w-full mt-[5rem] lg:mt-0">
        <motion.div
          className="flex flex-col text-center text-colorDarkPrimary dark:text-colorLigthPrimary"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-6xl font-bold">Mi Portafolio</span>
          <p className="mt-4">
            Visita los proyectos mas recientes de mi portafolio
          </p>
        </motion.div>
        <div className="mt-20 grid gap-5 max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((post, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <div className="container">
                  <div className="front" style={{
                      backgroundImage: `url(${url}${post.imgs})`, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="inner">
                      <p className="relative text-[1rem] mb-[2rem] text-colorLigthPrimary">{post.titulo}</p>
                      <span className="text-colorLigthPrimary font-serif">{post.date}</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>{post.short}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionProjects;
