import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './routes/Home';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
