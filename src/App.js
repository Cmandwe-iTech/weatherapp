import { Routes, Route} from 'react-router-dom'
import './App.css';
import Weather from './components/weather';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Weather/>}/>
    </Routes>
    );
}

export default App;
