import './App.css';
import { Banner } from './components/Banner';
import { Featured } from './components/Featured';
import Header from "./components/Header";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Featured/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
