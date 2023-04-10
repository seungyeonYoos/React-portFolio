import './App.css';

function App() {
  var docStyle = document.documentElement.style;

// setting CSS variables inside this JS where they 
// can be declaratively used inside the CSS file.
document.addEventListener('mousemove', function(e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});
  return (
    <div className="App">
      <Nav></Nav>
      <div className="ball"></div>
    </div>
  );
}

function Nav(){
  <>
    <div>logo</div>
    <div>
      <div>about</div>
      <div>project</div>
      <div>contact</div>
    </div>
  </>
}

export default App;
