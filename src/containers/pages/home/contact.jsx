import Input from "components/Forms/input";
import Textarea from "components/Forms/textarea";
import { FaRegCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ButtonPrimary from "components/Button/buttonPrimary";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

function SectionContactMe({ darkmode }) {
  let emptymensaje = {
    name: "",
    email: "",
    message: "",
  };
  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [isValidEmailState, setIsValidEmailState] = useState(true);
  const [contacto, setContacto] = useState(emptymensaje);
  const form = useRef();

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmailState(emailPattern.test(email));
    return emailPattern.test(email);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _contact = { ...contacto };
    _contact[`${name}`] = val;
    setContacto(_contact);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidEmail(contacto.email)) {
      await sendEmail();
    }
  };

  const sendEmail = () => {
    emailjs
      .send(serviceKey, templateKey, contacto, {
        publicKey: publicKey,
      }).then(
        () => {
          toast.success("¡Mensaje enviado con éxito!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkmode ? "dark" : "light",
          });
        },
        (error) => {
          toast.error(`Error al enviar el mensaje: ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkmode ? "dark" : "light",
          });
        }
      );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setCopiedText(text);
        setTimeout(() => {
          setCopied(false);
          setCopiedText("");
        }, 2000);
      })
      .catch((err) => console.error("Error copying to clipboard: ", err));
  };

  const email = "aisakvelizdc@gmail.com";
  const numeros = "+591 69625120";
  return (
    <div className="relative flex items-center h-auto md:h-screen">
      <div className="mt-[5rem] lg:mt-0 mx-auto max-w-7xl text-colorDarkPrimary dark:text-colorLigthPrimary">
        <motion.div
          className="flex flex-col text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-6xl font-bold">Datos de Contacto</span>
          <p className="mt-4">
            Conéctate conmigo para convertir tus ideas en soluciones digitales.
          </p>
        </motion.div>
        <div className="pt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <form
              className="backdrop-blur-sm overflow-hidden rounded-xl p-2"
              onSubmit={handleSubmit}
              ref={form}
            >
              <Input
                type="text"
                name="name"
                value={contacto.name}
                onChange={onInputChange}
                text="Nombre"
                placeholder="Isak Veliz"
                required={true}
              />
              <div>
                <Input
                  type="email"
                  name="email"
                  value={contacto.email}
                  onChange={onInputChange}
                  text="Correo Electronico"
                  placeholder="example@gmail.com"
                  required={true}
                />
                {!isValidEmailState && (
                  <p className="text-sm text-red-600">
                    <span className="font-medium">Oops!</span> ¡Por favor,
                    ingresa un correo electrónico valido!
                  </p>
                )}
              </div>
              <Textarea
                name="message"
                rows={3}
                value={contacto.message}
                onChange={onInputChange}
                text="Mensaje"
                required={true}
              />
              <div className="py-4 flex justify-end">
                <ButtonPrimary type="submit" title="Enviar" />
              </div>
            </form>
          </div>
          <div className="p-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-none lg:px-0 lg:py-0">
              <blockquote className="text-colorDarkPrimary dark:text-colorLigthPrimary">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-2xl font-bold">Correo Electrónico</h1>
                  <div className="mt-2 mb-6 flex items-center text-1xl gap-4 font-medium text-gray-800 dark:text-gray-500">
                    {email}
                    <FaRegCopy
                      onClick={() => copyToClipboard(email)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  {copied && copiedText === email && (
                    <p className="text-green-500">
                      ¡Correo copiado al portapapeles!
                    </p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-2xl font-bold">Teléfono</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[50rem]">
                    <div className="flex-col">
                      <div className="mt-2 mb-6 flex items-center gap-4 text-1xl font-medium text-gray-800 dark:text-gray-500">
                        {numeros}
                        <FaRegCopy
                          onClick={() => copyToClipboard(numeros)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      {copied && copiedText === numeros && (
                        <p className="text-green-500">
                          ¡Número de teléfono copiado!
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-2xl font-bold">Dirección</h1>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full max-w-[50rem]">
                    <div className="mt-2 mb-6text-1xl font-medium text-gray-800 dark:text-gray-500">
                      Potosí, Bolivia
                    </div>
                  </div>
                </motion.div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SectionContactMe;
