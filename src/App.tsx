import './App.css';
import ShowGame from './components/ShowGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainGame from './pages/MainGame';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowGame />} />
        <Route path='/game' element={<MainGame/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
