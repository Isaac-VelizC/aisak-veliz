import { motion } from "framer-motion";

export default function Input({ text, type, value, onChange, name, placeholder }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-[22rem] p-5 font-mono">
      <label className="block text-gray-700 text-sm font-bold mb-2">{text}</label>
      <input
        type={type}
        id={name}
        value={value ?? ""}
        onChange={(e) => onChange(e, name)}
        className="text-sm custom-input w-full px-4 py-2 border border-none rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1
        focus:outline-colorLigthTree dark:focus:outline-colorDarkTree bg-colorLigthTree dark:bg-colorDarkSecondary"
        placeholder={placeholder}
      />
    </motion.div>
  );
}
