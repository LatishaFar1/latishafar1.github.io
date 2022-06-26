import './App.css';
import Home from './components/Home';
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './components/Projects/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/projects" element={<Projects/>} />
            
          </Routes>
      </Router>
 
      <Footer />
    </div>
  );
}

export default App;
