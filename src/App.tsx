import './App.css'
import Navbar from './navbar'
import Footer from './footer';
import AboutMe from './aboutMe';
import TechnologyList from './technologyList';
import ContactPage from './contactPage';
import ProjectsGrid from './projectsGrid';
import ExperienceTimeline from './experienceTimeline';
import EducationTimeline from './education';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutMe />
        <TechnologyList/>
        <ProjectsGrid />
        <ExperienceTimeline />
        <EducationTimeline />
        <ContactPage/>
      </main>
      <Footer />
    </div>
  );
}

export default App
