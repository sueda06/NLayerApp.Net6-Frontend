import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
    const loginClick = () =>{
      
        window.localStorage.removeItem("token"); localStorage.clear();
        navigate("/pages/Login")
        toast.success('Success', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
        return(
            <div>
                <br/>
                <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>loginClick()}
        >Çıkış yap
        </button>
            </div>
        )
}
export default Admin;