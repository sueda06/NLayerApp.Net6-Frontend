import React,{Component} from 'react';
import {variables} from './Variables.js';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Category extends Component{
  
    constructor(props){
        super(props);

        this.state={
            categories:[],
            id:0,
            Name:"",
            products:[],

        }
    }
    refreshList(){
        axios.get(variables.API_URL+'Categories') 
        .then(data=>{
            this.setState({categories:data.data.data});
            console.log(data.data);
        })
    }
    render(){
        return(
            <div>
                <h3>This is Category page</h3>
            </div>
        )
    }
}