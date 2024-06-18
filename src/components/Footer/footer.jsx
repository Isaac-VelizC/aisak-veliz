import Logo from "assets/logo/black.png";
function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-full py-10 px-8 sm:px-6 lg:py-6 lg:px-8">
        <div className="flex flex-col items-center text-center text-colorDarkPrimary dark:text-colorLigthPrimary">
          <div className="py-4">
            <img src={Logo} alt="Logo" width={150}/>
          </div>
          <p className="pt-10 text-base  px-4 lg:px-20">
            Mejorando el mundo a través de la creación de soluciones elegantes y
            eficientes en el mundo digital.
          </p>
          <p className="pt-10 text-base">
            &copy; 💻 - Construido por @AIsakVeliz con 💜 en 2024
            <br />
            Inc. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
