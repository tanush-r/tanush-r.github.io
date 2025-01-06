import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects, // Added Projects import
} from './components';
import Certificates from './components/Certificates';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/* Navbar and Hero Section */}
        <div>
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <div 
          className="bg-about bg-cover bg-center bg-no-repeat"
          // style={{
          //   backgroundColor: "#000000",
          // }}
        >
          <About />
        </div>

        {/* Tech Section */}
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        {/* Projects Section */}
        <div className="bg-projects bg-cover bg-center bg-no-repeat pb-10">
          <Projects />
        </div>

        {/* Certificates Section */}
        <div className="bg-certificates bg-cover bg-center bg-no-repeat pb-10">
          <Certificates />
        </div>

        {/* Experience Section */}
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
