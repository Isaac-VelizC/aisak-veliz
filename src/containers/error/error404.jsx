import { Link } from "react-router-dom";
import "./style/404.css";

function Error404() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <section className="error-container">
          <span><span>4</span></span>
          <span>0</span>
          <span><span>4</span></span>
        </section>
        <div className="text-center py-[6rem]">
          <Link
            target="_blank"
            to="/"
            className=" bg-colorLigthTree py-2 px-4 rounded-xl shadow-2xl hover:bg-colorDarkFive hover:text-colorLigthSecondary duration-300 transition ease-in-out font-semibold"
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
