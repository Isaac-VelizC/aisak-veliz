import { useState } from "react";
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ParticlesComponent from "style/particle";
import AIsakVelizLogo from "assets/logo/logo.png";
import { Link } from "react-router-dom";

function Navbar({
  headerRef,
  aboutMeRef,
  servicesRef,
  skillsRef,
  projectsRef,
  contactMeRef,
}) {
  const [darkmode, setDarkmode] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbar.classList.add("shadow-lg");
        navbar.classList.add("backdrop-filter");
        navbar.classList.add("backdrop-blur-lg");
      } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.remove("backdrop-filter");
        navbar.classList.remove("backdrop-blur-lg");
      }
    }
  }

  const navigationItems = [
    { name: "Home", ref: headerRef, activeClass: "home" },
    { name: "About Me", ref: aboutMeRef, activeClass: "aboutMe" },
    { name: "Services", ref: servicesRef, activeClass: "services" },
    { name: "Skills", ref: skillsRef, activeClass: "skills" },
    { name: "Projects", ref: projectsRef, activeClass: "projects" },
    { name: "Contact Me", ref: contactMeRef, activeClass: "contactMe" },
  ];

  const handleNavigation = (newActive) => {
    setActive(newActive);
  };

  const themeMode = () => {
    return (
      <div
        className="cursor-pointer"
        onClick={() => {
          if (darkmode) {
            document.body.classList.remove("dark");
            setDarkmode(false);
          } else {
            document.body.classList.add("dark");
            setDarkmode(true);
          }
        }}
      >
        {darkmode ? (
          <CiCloudMoon size={30} className="dark:text-colorLigthPrimary" />
        ) : (
          <CiCloudSun size={30} />
        )}
      </div>
    );
  };

  return (
    <>
      <nav
        data-scroll
        data-scroll-id="hey"
        id="navbar"
        className="w-full top-0 transition duration-300 ease-in-out z-40 fixed dark:shadow-colorDarkSecondary/50 shadow-colorLigthSecondary/50"
      >
        <div className=" flex items-center font-medium justify-around">
          <div className="z-40 p-5 md:w-auto w-full flex justify-between">
            <Link onClick={() => {
              scrollToRef(headerRef)
            }} className=" flex justify-center items-center gap-2">
              <img src={AIsakVelizLogo} alt="AIsakVeliz" width={30} />
              <p className="md:flex hidden text-2xl font-sans italic text-colorDarkPrimary dark:text-colorLigthPrimary">
                AIsak<span className="text-colorUnique">Veliz</span>
              </p>
            </Link>
            <div className="text-3xl md:hidden flex justify-center items-center dark:text-colorLigthPrimary gap-4">
              {themeMode()}
              <div onClick={() => setOpen(!open)}>
                {!open ? <GiHamburgerMenu /> : <IoMdClose />}
              </div>
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-6 font-medium">
            {navigationItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer dark:text-colorLigthPrimary hover:text-colorDarkFour dark:hover:text-colorLigthFour transition duration-1000 ease-in-out ${
                  active === item.activeClass
                    ? "shadow-[0_2px_0_0_#7E7B83] dark:shadow-[0_2px_0_0_#BCB8C1] px-2 pb-1"
                    : ""
                }`}
                onClick={() => {
                  handleNavigation(item.activeClass);
                  scrollToRef(item.ref);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="md:flex hidden items-center gap-10">
            {themeMode()}
          </div>
          {/* Mobile nav */}
          <ul
            className={`bg-colorLigthPrimary md:hidden dark:bg-colorDarkPrimary fixed w-[70%] h-screen top-0 overflow-y-auto bottom-0 py-20 px-6 space-y-2
        duration-500 ${open ? "left-0" : "left-[-100%]"}`}
          >
            {navigationItems.map((item) => (
              <li
                key={item.name}
                className={`dark:text-colorLigthPrimary transition duration-1000 ease-in-out p-2 rounded-r-full 
                  ${
                    active === item.activeClass
                      ? "shadow-[8px_0_4px_0_#7E7B83] dark:shadow-[8px_0_4px_0_#BCB8C1] font-bold"
                      : ""
                  }`}
                onClick={() => {
                  handleNavigation(item.activeClass);
                  scrollToRef(item.ref);
                  setOpen(!open);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ParticlesComponent
        id="particles"
        colorBg={darkmode ? "#020006" : "#F9F5FF"}
        colorParticle={darkmode ? "#F9F5FF" : "#020006"}
      />
    </>
  );
}

export default Navbar;
