import React,{ useState, useEffect }  from 'react';
import {variables} from './Variables.js';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category(){
        const [categories, setCategories] = useState([]);
        const [id, setId] = useState(0);
        const [Name, setName] = useState('');
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
          refreshList();
        }, []);

    const refreshList = (id) => {
        axios.get(variables.API_URL +'Categories/GetSingleCategoryByIdWithProducts/'+id, { headers: { "Authorization": window.localStorage.getItem("token") } })
          .then(response => {
            setCategories(response.data.data.data);
            console.log(response.data.data.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
  

        return(
            <div>
               <table className="table table-striped">
    <thead>
    <tr> <th>
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
        {categories.map(emp=>
            <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.products}</td>
                <td><button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>refreshList(emp.id)}>
                </button></td>
            </tr>
            )}
    </tbody>
    </table>
            </div>
        )
    
        }

export default Category;