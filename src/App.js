import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
