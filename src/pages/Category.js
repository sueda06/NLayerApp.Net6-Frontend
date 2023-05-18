import React,{ useState, useEffect }  from 'react';
import {variables} from './Variables.js';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category(){
        const [id, setId] = useState(0);
        const [name, setName] = useState('');
        const [products, setProducts] = useState([]);
      
       
const changeId = (e) =>{
setId(e.target.value)
};
    const refreshList = () => {
        axios.get(variables.API_URL +'Categories/GetSingleCategoryByIdWithProducts/'+id, { headers: { "Authorization": window.localStorage.getItem("token") } })
          .then(response => {
            setProducts(response.data.data.products);
            setId(response.data.data.id);
            setName(response.data.data.name);
            console.log(response.data.data.products);
          })
          .catch(error => {
            console.error(error);
          });
      };
  

        return(
          
<div>
   <div>
   <input type="text" className="form-control"  value={id}
            onChange={changeId}/>
     <button type="button"
        className="btn btn-primary float-start" onClick={ ()=>refreshList()}>İd </button>
   </div>
 <table className="table table-striped">
    <thead>
    <tr> 
        <th>
            id
        </th>
        <th>
            Name
        </th>
        <th>
            Products
        </th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
           <td> 
            <th>id</th>
            <th>name</th>
            <th>stok</th>
            <th>price</th>
            {products.map(emp=>
            <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.stock}</td>
                <td>{emp.price}</td>
            </tr>
            )}
            </td>
        </tr>
        
    </tbody>
</table>
</div>
)
}

export default Category;