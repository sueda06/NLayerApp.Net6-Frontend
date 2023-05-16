import logo from './logo.svg';
import './App.css';
import {Product} from './pages/Product';
import {Category} from './pages/Category';
import {Home} from './pages/Home'; 
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/pages/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/pages/Product">
              Product
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/pages/Category">
              Category
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/pages/Login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/pages/Home' component={Home}/>
        <Route path='/pages/Product' component={Product}/>
        <Route path='/pages/Category' component={Category}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;