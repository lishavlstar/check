
import axios from 'axios';
import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class demo extends Component {

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
        let first_name = event.target[0].value;
        let last_name = event.target[1].value;
        let username = event.target[2].value;
        let email = event.target[3].value;
        let password = event.target[4].value;
        var body =  {
          first_name : first_name,
          last_name : last_name,
          username : username,
          email : email,
          password : password
        } 
       console.log(body)
        var headerOption = {
            "headers": {
                "Content-Type": "application/json"
            }
        }
        axios.post('http://127.0.0.1:8000/api/register/', body, {headerOption})
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
                          data: body 
                        })
                    }, 1000);

                }
                else {
                    toast.success(response.data.message);
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

    return(
      <div className="container">
       <ToastContainer />
      <div class="rows1">
        <form onSubmit={this.handleSubmit}>
        <div>
            <div>
            <h2>REGISTER</h2>
            
                <label for="fname"><b>First Name</b></label>
                <input type="text"  placeholder="Enter First Name" name="fname" id="fname" required ref={node => (this.inputNode = node)}/>
            
                <label for="lname"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lname" id="lname" required ref={node => (this.inputNode = node)}/>
            
                <label for="uname"><b>UserName</b></label>
                <input type="text"  placeholder="Enter UserName" name="uname" id="uname" required ref={node => (this.inputNode = node)}/>
            
                <label for="email"><b>Email</b></label>
                <input type="text"  placeholder="Enter Email" name="email" id="email" required ref={node => (this.inputNode = node)}/>

            
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required ref={node => (this.inputNode = node)}/>
            
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password"  placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required ref={node => (this.inputNode = node)}/>
            
                <button type="submit" >Register</button>
         </div>

      </div>
      </form>
      </div>
      </div>
    
    )
}
}
