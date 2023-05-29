import React, { useState, useEffect } from "react";
import { variables } from "./Variables.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(0);
  const [Path, setPath] = useState("");
  const [Name, setName] = useState("");
  const [Stock, setStock] = useState(0);
  const [Price, setPrice] = useState(0);
  const [CategoryId, setCategoryId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get(variables.API_URL + "Products", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => {
        setProducts(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const changeProductName = (e) => {
    setName(e.target.value);
  };
  const changePath = (e) => {
    setPath(e.target.value);
  };
  const changeStock = (e) => {
    setStock(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeCategoryId = (e) => {
    setCategoryId(e.target.value);
  };

  const addClick = () => {
    setName("");
    setPath("");
    setStock(0);
    setPrice(0);
    setCategoryId(0);
  };

  const editClick = (emp) => {
    setId(emp.id);
    setName(emp.name);
    setPath(emp.path);
    setStock(emp.stock);
    setPrice(emp.price);
    setCategoryId(emp.categoryId);
  };

  const createClick = () => {
    axios
      .post(
        variables.API_URL + "Products",
        {
          name: Name,
          path: Path,
          stock: Stock,
          price: Price,
          categoryId: CategoryId,
        },
        { headers: { Authorization: window.localStorage.getItem("token") } }
      )
      .then((result) => {
        setTimeout(() => {
          toast.success("Success", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 1000);
        refreshList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateClick = () => {
    axios
      .put(
        variables.API_URL + "Products",
        {
          id: id,
          name: Name,
          path: Path,
          stock: Stock,
          price: Price,
          categoryId: CategoryId,
        },
        { headers: { Authorization: window.localStorage.getItem("token") } }
      )
      .then((result) => {
        toast.success("Success", {
          position: toast.POSITION.TOP_RIGHT,
        });
        refreshList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteClick = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(variables.API_URL + "Products/" + id, {
          headers: { Authorization: window.localStorage.getItem("token") },
        })
        .then((result) => {
          toast.success("Success", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setId(0);
          refreshList();
        })
        .catch((error) => {
          toast.error("Fail", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.error(error);
        });
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => addClick()}
      >
        Add Product
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Resim</th>
            <th>id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>CategoryId</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((emp) => (
            <tr key={emp.id}>
              <td>
                <button
                  type="button"
                  className="btn btn-light mr-1"
                  onClick={() => navigate("/pages/ProductDetail/" + emp.id)}
                >
                  <img src={emp.path} width="50"></img>
                </button>
              </td>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.stock}</td>
              <td>{emp.price}</td>
              <td>{emp.categoryId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-light mr-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => editClick(emp)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="btn btn-light mr-1"
                  onClick={() => deleteClick(emp.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 w-50 bd-highlight">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Product Name</span>
                    <input
                      type="text"
                      className="form-control"
                      value={Name}
                      onChange={changeProductName}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Stock</span>
                    <input
                      type="text"
                      className="form-control"
                      value={Stock}
                      onChange={changeStock}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Resim yolu</span>
                    <input
                      type="text"
                      className="form-control"
                      value={Path}
                      onChange={changePath}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Price</span>
                    <input
                      type="text"
                      className="form-control"
                      value={Price}
                      onChange={changePrice}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Category id</span>
                    <input
                      type="text"
                      className="form-control"
                      value={CategoryId}
                      onChange={changeCategoryId}
                    />
                  </div>
                </div>
              </div>

              {id == 0 ? (
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => createClick()}
                >
                  Create
                </button>
              ) : null}

              {id != 0 ? (
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => updateClick()}
                >
                  Update
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default Product;
