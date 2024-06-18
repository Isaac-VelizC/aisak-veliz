import { useEffect, useRef, useState } from "react";
import Layout from "layouts/layout";
import SectionAboutMe from "./home/about";
import SectionContactMe from "./home/contact";
import SectionProjects from "./home/projects";
import SectionSkills from "./home/skills";
import SectionServices from "./home/services";
import Navbar from "components/Navbar/navbar";
import SectionHeader from "./home/header";
import Footer from "components/Footer/footer";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => setLoading(false), 3000);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Navbar 
        headerRef={headerRef}
        aboutMeRef={aboutMeRef} 
        servicesRef={servicesRef} 
        skillsRef={skillsRef} 
        projectsRef={projectsRef} 
        contactMeRef={contactMeRef} 
      />
      <main className="relative px-8 lg:px-28 overflow-hidden">
        <div ref={headerRef}>
          <SectionHeader contactMeRef={contactMeRef}/>
        </div>
        <div ref={aboutMeRef}>
          <SectionAboutMe />
        </div>
        <div ref={servicesRef}>
          <SectionServices />
        </div>
        <div ref={skillsRef}>
          <SectionSkills />
        </div>
        <div ref={projectsRef}>
          <SectionProjects />
        </div>
        <div ref={contactMeRef}>
          <SectionContactMe />
        </div>
        <Footer/>
      </main>
      {loading && (
        <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-colorLigthFour dark:bg-colorDarkFour z-50">
          <p>Cargando</p>
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
