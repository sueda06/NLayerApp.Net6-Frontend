import logo from './logo.svg';
import './App.css';
import Product from './pages/Product.js';
import Category from './pages/Category.js';
import Login from './pages/Login.js';
import Admin from './pages/Admin.js';
import Home from './pages/Home.js'; 
import Register from './pages/Register.js';
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
      <NavbarMenu/>
      <Routes>
        <Route path='/pages/Home' element={<Home/>}/>
        <Route path='/pages/Product' element={<Product/>}/>
        <Route path='/pages/Category' element={<Category/>}/>
        <Route path='/pages/Login' element={<Login/>}/>
        <Route path='/pages/Admin' element={<Admin/>}/>
        <Route path='/pages/Register' element={<Register/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;