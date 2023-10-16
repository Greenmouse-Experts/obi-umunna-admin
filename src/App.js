import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
      <Route path='/' index element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard/*' element={<Dashboard/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
