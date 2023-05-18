import logo from './logo.svg';
import './App.css';
import Product from './pages/Product.js';
import Category from './pages/Category.js';
import Login from './pages/Login.js';
import Home from './pages/Home.js'; 
import Register from './pages/Register.js';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
      <NavbarMenu/>
      <Switch>
        <Route path='/pages/Home' component={Home}/>
        <Route path='/pages/Product' component={Product}/>
        <Route path='/pages/Category' component={Category}/>
        <Route path='/pages/Login' component={Login}/>
        <Route path='/pages/Register' component={Register}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;