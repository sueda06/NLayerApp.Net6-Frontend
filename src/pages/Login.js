import React, { useState } from "react";
import { variables } from "./Variables.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const loginClick = async () => {
    try {
      const result = await axios.post(variables.API_URL + "Auth/login", {
        email: email,
        password: password,
      });
      window.localStorage.setItem("token", "Bearer " + result.data.data);
      const jwtData = jwt_decode(result?.data?.data);
      window.localStorage.setItem(
        "name",
        jwtData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      );
      toast.success("Success", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/pages/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={changeEmail}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Password</span>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={changePassword}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary float-start"
            onClick={() => loginClick()}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary float-start"
            onClick={() => navigate("/pages/Register")}
          >
            Register
          </button>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
}
export default Login;
