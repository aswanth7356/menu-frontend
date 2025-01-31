import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import DrinksPage from './pages/DrinksPage';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink' element={<DrinksPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
