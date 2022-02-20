import Header from './components/Header';
import SideFooter from './components/SideFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Nav bar */}
      <Header />

      <h1>Rendering App</h1>

      {/* Footer along the bottom Side */}
      <SideFooter />
    </div>
  );
}

export default App;
