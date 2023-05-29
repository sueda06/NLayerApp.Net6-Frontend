import React, { useState, useEffect } from "react";
import axios from "axios";
import { variables } from "./Variables";
import { toast } from "react-toastify";

function Admin() {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    refreshList();
  }, []);

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const refreshList = () => {
    axios
      .get(variables.API_URL + "Users/" + window.localStorage.getItem("name"))
      .then((response) => {
        setUser(response.data.data);
        setId(response.data.data.id);
        setFirstName(response.data.data.firstName);
        setLastName(response.data.data.lastName);
        setUserName(response.data.data.userName);
        setEmail(response.data.data.email);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const updateClick = () => {
    axios
      .put(variables.API_URL + "Users", {
        id: id,
        userName: userName,
        email: email,
        firstName: firstName,
        lastName: lastName,
      })
      .then((result) => {
        toast.success("Success", {
          position: toast.POSITION.TOP_RIGHT,
        });
        refreshList();
        window.localStorage.setItem("name", userName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 w-50 bd-highlight">
          <div className="input-group mb-3">
            <span className="input-group-text">First Name</span>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={changeFirstName}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Last Name</span>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={changeLastName}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">UserName</span>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={changeUserName}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={changeEmail}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary float-start"
        onClick={() => updateClick()}
      >
        Update
      </button>
    </div>
  );
}
export default Admin;
