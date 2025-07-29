import './App.css';
import Info from './components/Info.jsx';
import About from './components/About.jsx';
import Interests from './components/Interests.jsx';
import Footer from './components/Footer.jsx';
import candidates from './assets/Data/candidates.js';

function App() {

  // Creating a map() method to go through the array selecting each element of the data file
  const myElements = candidates.map((item) => {
    return (
      <Info 
        userName={item.name}
        occupation = {item.occupation}
        email = {item.email}
        linkedinLink = {item.linkedin_link}
        about = {item.about}
      />
    )
  })

  return (
    <div className='componentsHolder'>
      {myElements}
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