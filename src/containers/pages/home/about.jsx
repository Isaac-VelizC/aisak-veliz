import { motion } from "framer-motion";

function SectionAboutMe() {
  const data = {
    id: 1,
    name: "Ingeniero en sistemas",
    shortDescription: "Desarrollador Full Stack.",
  };

  const tags = [
    {
      id: 1,
      name: "Programador",
    },
    {
      id: 2,
      name: "Diseñador",
    },
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
              src="https://media.istockphoto.com/id/1154370446/es/foto/divertido-mapache-en-gafas-de-sol-verdes-que-muestra-un-gesto-de-rock-aislado-sobre-fondo.jpg?s=612x612&w=0&k=20&c=XyRHmlfm_g3XQi8UXjZTzvMY_cfXCImzbzvkg5drzxE="
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
            {data && data.name}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-medium text-center text-12"
          >
            {data && data.shortDescription}
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
              Profesional de Ingeniería de Sistemas. Desarrollador web y movil /
              programador web / frontend / backend. Experiencia como
              desarrollador junior. Con capacidades para establecer los
              requerimientos de un sistema de información e implementar su
              solución informática, Modelamiento de Base de Datos, Manejo de
              Control de Versiones, Manejo de Bases de datos SQL, Manejo de
              framework Laravel/ React/ Livewire / Flutter / Tailwind, Manejo de
              lenguajes PHP / JavaScript / python / C#. Si estás interesado en
              colaborar o tienes alguna pregunta, no dudes en ponerte en
              contacto conmigo. Estoy aquí para ayudar.
            </motion.p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default SectionAboutMe;
