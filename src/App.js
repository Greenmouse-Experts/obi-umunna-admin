import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
      <Route path='/' index element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard/*' element={<Dashboard/>} />
        <Route path='/admin/*' element={<AdminDashboard/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
