import React from "react";
import { Link } from "react-router-dom";
import AIsakVelizDark from "assets/logo/aisakveliz-dark.png";
import LogoDark from "assets/logo/logo-light.png";
import AIsakVelizLight from "assets/logo/aisakveliz-light.png";
import LogoLight from "assets/logo/logo-dark.png";

function Footer({ darkmode }) {
  return (
    <footer className="relative">
      <div className="max-w-full pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center text-colorDarkTree dark:text-colorLigthTree">
          <div className="py-4 flex flex-col justify-center items-center">
            <img src={darkmode ? LogoLight : LogoDark } alt="Logo" width={100} className="mb-4" />
            <img src={darkmode ? AIsakVelizLight : AIsakVelizDark } alt="Logo" width={250} />
          </div>
          <p className="mb-6 font-bold text-[0.6rem] uppercase tracking-widest">
            ISAAC VELIZ - PORTAFOLIO - INGENIERO DE SISTEMAS
          </p>
          <p className="pt-12 font-light text-[0.6rem] uppercase tracking-widest">
            &copy; 2024 . PORTAFOLIO | ISAAC VELIZ - CREADOR DE{" "}
            <Link
              className="hover:text-colorDarkPrimary dark:hover:text-colorLigthPrimary"
              to="https://aisakveliz.netlify.app/"
            >
              AISAKVELIZ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
