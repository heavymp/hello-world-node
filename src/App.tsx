import './App.css';
import Spectre from './components/Spectre';

function App() {
  return (
    <div>
      <Spectre />
      <div id="health-check" style={{ display: 'none' }}>OK</div>
    </div>
  );
}

export default App; 