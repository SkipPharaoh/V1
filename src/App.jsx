import {Routes, Route} from 'react-router-dom'
import './App.css';
import Disc from './components/Disc';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* HOME Page Component */}
        <Route path='/' element={<Home />} />

        {/* Resume Page */}
        <Route path='/resume.pdf' element={<Resume />} />

        {/* Disc Assestment */}
        <Route path='/disc.pdf' element={<Disc />} />

      </Routes>

    </div>
  );
}

export default App;
