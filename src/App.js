import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Interests from './components/interests';
import Footer from './components/footer';

function App() {
  return (
    <>
      <About />
      <Interests />
      <Footer />
    </>
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