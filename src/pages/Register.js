import React,{ useState } from 'react';
import {variables} from './Variables.js';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeFirstName =(e)=>{
        setFirstName(e.target.value);
    }
    const changeLastName=(e)=>{
        setLastName(e.target.value);
    }
    const changeUserName=(e)=>{
        setUserName(e.target.value);
    }
    const changeEmail =(e)=>{
        setEmail(e.target.value);
    }
    const changePassword =(e)=>{
        setPassword(e.target.value);
    }
    const registerClick = () =>{
        axios.post(variables.API_URL+'Auth/register',{
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            email:email,
            password:password
    }) .then((result)=>{
        toast.success('Success', {
            position: toast.POSITION.TOP_RIGHT
        });
    })
    }
    return(
     
<div>
    <div>
     <div>
     <div className="input-group mb-3">
            <span className="input-group-text">First Name</span>
            <input type="text" className="form-control"
            value={firstName}
            onChange={changeFirstName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Last Name</span>
            <input type="text" className="form-control"
            value={lastName}
            onChange={changeLastName}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">User Name</span>
            <input type="text" className="form-control"
            value={userName}
            onChange={changeUserName}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input type="text" className="form-control"
            value={email}
            onChange={changeEmail}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Password</span>
            <input type="text" className="form-control"
            value={password}
            onChange={changePassword}/>
        </div>
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>registerClick()}
        >Register
        </button>
         <NavLink className="btn btn-light btn-outline-primary" to="/pages/Login">
        Login
      </NavLink>
     </div>
    </div> 
    <ToastContainer />
</div>

    )
  }
  
  export default Register;