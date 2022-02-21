import {Routes, Route} from 'react-router-dom'
import './App.css';
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

      </Routes>

    </div>
  );
}

export default App;
