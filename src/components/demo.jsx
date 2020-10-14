import 'bootstrap/dist/css/bootstrap.css';
import '../style.css'
import React, { Component } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            linkText:"Sign in",
            isLoaded: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //login function called on form submit
    handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        let user_email=event.target[0].value;
        let user_password=event.target[1].value;
        var body =  {
            "username": user_email,
            "password": user_password
        } 
       console.log(body)
        var headerOption = {
            "headers": {
                "Content-Type": "application/json"
            }
        }
        axios.post('http://127.0.0.1:8000/api/login/', body, {headerOption})
            .then((response) => {
                if (response.data.code === "001") {
                    this.setState({
                        isLoaded: true,
                        linkText: 'please wait...'
                    });
                    toast.success(response.data.message);
                    setTimeout(() => {
                        this.props.history.push({
                            pathname: '/home',
                            data: user_email
                            
                          })
                    }, 1000);
                    
                }
                else {
                    toast.error(response.data.message);
                    this.setState({
                        isLoaded: false,
                        linkText: 'Sign in'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                
            })

    }

    render() {
        const {error, isLoaded, items} = this.state;
       
            
            return (
                <ul>
                  {this.state.people.map(({id, first_name, last_name, avatar}) => (
                    <li key={id}>
                      First Name: {first_name} Last Name: {last_name} avatar: {avatar}
                    </li>))
                  }
                </ul>
              );       
        
    }
}