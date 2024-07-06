import AIsakVelizLogo from "assets/logo/logo.png";
function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-full pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center text-colorDarkTree dark:text-colorLigthTree">
          <div className="py-2">
            <img src={AIsakVelizLogo} alt="Logo" width={100}/>
          </div>
          <p className="pt-10 text-base font-light text-[0.8rem] md:text-[1rem]">
            Mejorando el mundo a través de la creación de soluciones elegantes y
            eficientes en el mundo digital.
          </p>
          <p className="pt-6 text-[0.8rem] font-semibold md:text-[1rem]">
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
