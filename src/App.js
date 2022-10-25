import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Register } from './components/Register/Register';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
