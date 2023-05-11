import './App.css';
import './styles/Main.scss';
import Nav from '../src/components/nav';
import About from '../src/components/about';
import MainText from './components/mainText.js';
import Skill from './components/skill.js';
import Project from './components/project.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import ModalBasic from './components/modal.js';
import React, { useState, useRef, forwardRef } from 'react';

function App() {
  var docStyle = document.documentElement.style;
  document.addEventListener('mousemove', function (e) {
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  const scrollRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const projectClick = () => {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const contactClick = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  

  return (
    <div className="App">
      {modalOpen && <ModalBasic modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal} />}
      <div className='firstView'>
        <Nav handleClick={handleClick} projectClick={projectClick} contactClick={contactClick}></Nav>
        <MainText />
        <div className='eyes'>
          <div className='eye'>
            <div className="whiteEyes">
              <div className="ball"></div>
            </div>
            <div className="whiteEyes">
              <div className="ball"></div>
            </div>
          </div>
        </div>
      </div>
      <About ref={scrollRef}/>
      <Skill />
      <Project ref={projectRef}/>
      <Contact modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal} ref={contactRef}/>
      <Footer modalOpen={modalOpen} setModalOpen={setModalOpen} showModal={showModal}/>
    </div>
  );
}


export default App;
