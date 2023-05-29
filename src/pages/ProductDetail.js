import React, { useState, useEffect } from "react";
import axios from "axios";
import { variables } from "./Variables";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get(variables.API_URL + "Products/" + productId, {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => {
        setProduct(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <img src={product.path} width={100}></img>
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Category Id: {product.categoryId}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
