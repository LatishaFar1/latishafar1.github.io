import './App.css';
import Home from './components/Home';
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />



          </Routes>
      </Router>
 
      <Footer />
    </div>
  );
}

export default App;
