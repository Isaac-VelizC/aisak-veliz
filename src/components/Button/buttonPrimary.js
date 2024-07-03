import { motion } from "framer-motion";

const ButtonPrimary = ({ title, event, type }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      type={type}
      onClick={event}
      className="bg-colorDarkSecondary text-colorLigthTree dark:bg-colorLigthTree dark:text-colorDarkSecondary px-4 py-2 font-semibold rounded-xl"
    >
      {title}
    </motion.button>
  );
};

export default ButtonPrimary;