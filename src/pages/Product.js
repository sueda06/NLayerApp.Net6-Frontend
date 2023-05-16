import React,{Component} from 'react';
import {variables} from './Variables.js';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Product extends Component{
    constructor(props){
        super(props);

        this.state={
            products:[],
            id:0,
            Name:"",
            Stock:0,
            Price:0,
            CategoryId:0,

        }
    }

    refreshList(){
        axios.get(variables.API_URL+'Products') 
        .then(data=>{
            this.setState({products:data.data.data});
            console.log(data.data);
        })
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeProductName =(e)=>{
        this.setState({Name:e.target.value});
    }
    changeStock =(e)=>{
        this.setState({Stock:e.target.value});
    }
    changePrice =(e)=>{
        this.setState({Price:e.target.value});
    }
    changeCategoryId =(e)=>{
        this.setState({CategoryId:e.target.value});
    }

    addClick(){
        this.setState({
            Name:"",
            Stock:0,
            Price:0,
            CategoryId:0
        });
    }
    editClick(emp){
        this.setState({
            id:emp.id,
            Name:emp.name,
            Stock:emp.stock,
            Price:emp.price,
            CategoryId:emp.categoryId
        });
    }

    createClick(){
        axios.post(variables.API_URL+'Products',{
            name:this.state.Name,
            stock:this.state.Stock,
            price:this.state.Price,
            categoryId:this.state.CategoryId
    }) .then((result)=>{
        toast.success('Success', {
            position: toast.POSITION.TOP_RIGHT
        });
        this.refreshList();
    })
    }


    updateClick(){
        axios.put(variables.API_URL+'Products', {
            id:this.state.id,
            name:this.state.Name,
            stock:this.state.Stock,
            price:this.state.Price,
            categoryId:this.state.CategoryId
    }) 
    .then((result)=>{
        toast.success('Success', {
            position: toast.POSITION.TOP_RIGHT
        });
        this.refreshList();
    });
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
            axios.delete(variables.API_URL+'Products/'+id) 
            .then((result)=>{
                toast.success('Success', {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.refreshList();
            },(error)=>{
                toast.error('Fail',{
                    position: toast.POSITION.TOP_RIGHT
                });
            })
        }
    }


    render(){
        const {
            products,
            id,
            Name,
            Stock,
            Price,
            CategoryId
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Product
    </button>
    <table className="table table-striped">
    <thead>
    <tr> <th>
            id
        </th>
        <th>
            Name
        </th>
        <th>
            Stock
        </th>
        <th>
            Price
        </th>
        <th>
            CategoryId
        </th>
    </tr>
    </thead>
    <tbody>
        {products.map(emp=>
            <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.stock}</td>
                <td>{emp.price}</td>
                <td>{emp.categoryId}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(emp)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(emp.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Product Name</span>
            <input type="text" className="form-control"
            value={Name}
            onChange={this.changeProductName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Stock</span>
            <input type="text" className="form-control"
            value={Stock}
            onChange={this.changeStock}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input type="text" className="form-control"
            value={Price}
            onChange={this.changePrice}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Category id</span>
            <input type="text" className="form-control"
            value={CategoryId}
            onChange={this.changeCategoryId}/>
        </div>

     </div>
     
    </div>

    {id==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {id!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>

<ToastContainer />
</div>
        )
    }
}
