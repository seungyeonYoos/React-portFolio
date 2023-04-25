import './App.css';
import './styles/Main.scss';
import Nav from '../src/components/nav';
import About from '../src/components/about';
import MainText from './components/mainText.js';
import Skill from './components/skill.js';
import Project from './components/project.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

function App() {
  var docStyle = document.documentElement.style;
  document.addEventListener('mousemove', function (e) {
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
  });

  return (
    <div className="App">
      <Nav></Nav>
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
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
