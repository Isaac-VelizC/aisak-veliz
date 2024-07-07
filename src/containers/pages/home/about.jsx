import { motion } from "framer-motion";

function SectionAboutMe({ aboutMe, url }) {
  const tags = [
    { id: 1, name: "Programador"},
    { id: 2, name: "Diseñador" },
  ];

  return (
    <div className="relative p-4 ls:p-10 h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 py-2 lg:px-6 text-colorDarkPrimary dark:text-colorLigthPrimary">
        <div className="relative flex flex-col gap-4">
          <div className="text-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={aboutMe && url+aboutMe.photo}
              className="mx-auto my-4 h-68 w-64 rounded-xl drop-shadow-shadowPrimary"
              alt="Perfil"
            />
          </div>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-xl md:text-2xl font-bold uppercase"
          >
            {aboutMe && aboutMe.name}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-medium text-center text-12"
          >
            {aboutMe && aboutMe.short}
          </motion.span>
        </div>
        <div className=" border-b">
          <blockquote>
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" text-2xl md:text-4xl font-bold">
              Hola! Soy Isaac Veliz
            </motion.h1>
            {tags &&
              tags.map((item) => (
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  key={item.id}
                  className="mt-2 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:text-gray-400 border border-colorDarkSecondary "
                >
                  {item.name}
                </motion.span>
              ))}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 text-1xl">
              {aboutMe && aboutMe.description}
            </motion.p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default SectionAboutMe;
