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
import { fetchSkills, fetchSocials, fetchAboutMe, fetchContactInfo, fetchConfig, fetchProjects } from 'services/useFetch';

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const [socials, setSocials] = useState([]);
  const [aboutMe, setAboutMe] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [config, setConfig] = useState(null);
  const [projects, setProjects] = useState([]);

  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsData, socialsData, aboutMeData, contactInfoData, configData, projectsData] = await Promise.all([
          fetchSkills(),
          fetchSocials(),
          fetchAboutMe(),
          fetchContactInfo(),
          fetchConfig(),
          fetchProjects()
        ]);

        setSkills(skillsData);
        setSocials(socialsData);
        setAboutMe(aboutMeData);
        setContactInfo(contactInfoData);
        setConfig(configData);
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
      />
      <main className="relative px-8 lg:px-28 overflow-hidden">
        <div ref={headerRef}>
          <SectionHeader contactMeRef={contactMeRef} socials={socials}/>
        </div>
        <div ref={aboutMeRef}>
          <SectionAboutMe aboutMe={aboutMe} />
        </div>
        <div ref={servicesRef}>
          <SectionServices/>
        </div>
        <div ref={skillsRef}>
          <SectionSkills skills={skills} />
        </div>
        <div ref={projectsRef}>
          <SectionProjects projects={projects} />
        </div>
        <div ref={contactMeRef}>
          <SectionContactMe contactInfo={contactInfo} />
        </div>
        <Footer/>
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
