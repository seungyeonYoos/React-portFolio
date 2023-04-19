import './App.css';
import MainText from './components/mainText.js';

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
      
    </div>
  );
}

function Nav() {
  return (
    <div className='nav'>
      <div className="navbar">
      <div className='logo'>Seungyeon's space</div>
      <div className="navbarR">
        <div>about</div>
        <div>project</div>
        <div>contact</div>
      </div>
    </div>
    </div>
    
  )
}

export default App;
