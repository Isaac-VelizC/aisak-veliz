import AIsakVelizLogo from "assets/logo/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-full pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center text-colorDarkTree dark:text-colorLigthTree">
          <div className="py-2">
            <img src={AIsakVelizLogo} alt="Logo" width={100}/>
          </div>
          <p className="py-10 font-semibold text-[0.4rem] md:text-[0.6rem] uppercase tracking-widest">
            ISAAC VELIZ - PORTAFOLIO - INGENIERO DE SISTEMAS
          </p>
          <p className="pt-12 text-[0.4rem] font-light md:text-[0.6rem] uppercase tracking-widest">
            &copy; 2024 . PORTAFOLIO | ISAAC VELIZ - CREADOR DE <Link className=" hover:text-colorDarkPrimary dark:hover:text-colorLigthPrimary" to="https://aisakveliz.netlify.app/">AISAKVELIZ</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
