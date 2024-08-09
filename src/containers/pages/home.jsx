import { useEffect, useRef, useState } from 'react';
import Layout from 'layouts/layout';
import SectionAboutMe from './home/about';
import SectionContactMe from './home/contact';
import SectionProjects from './home/projects';
import SectionSkills from './home/skills';
import SectionServices from './home/services';
import Navbar from 'components/Navbar/navbar';
import SectionHeader from './home/header';
import Footer from 'components/Footer/footer';
import './home/styles/loader.css';
import { fetchAboutMe, fetchProjects } from 'services/useFetch';

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [aboutMe, setAboutMe] = useState(null);
  const [projects, setProjects] = useState([]);
  const [darkmode, setDarkmode] = useState(false);

  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);
  const url ='https://aisakveliz-admin.igla.cloud/';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ aboutMeData, projectsData ] = await Promise.all([
          fetchAboutMe(),
          fetchProjects()
        ]);
        setAboutMe(aboutMeData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
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
        darkmode={darkmode} setDarkmode={setDarkmode}  
      />
      <main className="relative px-8 lg:px-28 overflow-hidden">
        <div ref={headerRef}>
          <SectionHeader contactMeRef={contactMeRef}/>
        </div>
        <div ref={aboutMeRef}>
          <SectionAboutMe aboutMe={aboutMe} url={url} />
        </div>
        <div ref={servicesRef}>
          <SectionServices/>
        </div>
        <div ref={skillsRef}>
          <SectionSkills/>
        </div>
        <div ref={projectsRef}>
          <SectionProjects projects={projects} url={url} />
        </div>
        <div ref={contactMeRef}>
          <SectionContactMe darkmode={darkmode} setDarkmode={setDarkmode} />
        </div>
        <Footer />
      </main>
      {loading && (
        <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-colorDarkFour z-50">
          <div className="code-loader">
            <span>{'<'}</span>/<span>{'>'}</span>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
