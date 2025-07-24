import './App.css';
import Info from './components/Info.jsx';
import About from './components/About.jsx';
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='componentsHolder'>
      <Info 
        userName="Bruno Finhana"
        occupation="Systems Analyst"
      />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;


/*

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/