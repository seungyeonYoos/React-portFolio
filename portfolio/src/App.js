import './App.css';
import './styles/Main.scss';
import Nav from '../src/components/nav';
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


export default App;
