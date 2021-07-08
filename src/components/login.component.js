
/// login component  ->> Auth Service

import React, { Component } from 'react'
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"

import AuthService from "../services/auth.service"
import { Button } from 'bootstrap'

const required = value=>{
    if(!value){
        return
        (
            <div className="alert alert-danger" role="alert">
                this field is required
            </div>
        );
    }
};



/// class based ----->>> Functional Componenet Based 
// react makes it arount 30% slower than the funct components
// imparative-->>   and declarative

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username="",
            password="",
            loading="false",
            message=""
        }
    }

    handleLogin(e){
        e.preventDefault();  // why we call this || 

        this.state({
            message="",
            loading=true
        });

        this.form.validateAll();  // will say validate all stuff unde the form 

        if(this.checkBtn.context._error.length===0){
            // login here 

            AuthService.login(this.state.username, this.state.password)
            .then(
                ()=>{

                    // java --> Controller 
                    // MVC  -->> Action -> Controll 

                    //react-router-dom 
                        // history--> push -------> this means we will reach at the profile
                    this.props.history.push("/profile");
                    window.location.reload()
                },

                error=>{
                    const resMessage=(
                        error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();

                        this.setState({
                                loading:false,
                                message:resMessage
                        });
                }
            )
        }
        else {
            this.setState({
                loading:false
            });
        }

    
    }

    onChangePassword(e){
        this.setState({
         password=e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            username=e.target.value
        })
    }

    render(){
        return(
            <div className="col-md-12">
                   <div>
                       <img src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                       alt="Not able to access"
                       className="profile-img-card"
                       />

                       <Form
                        onSubmit={this.handleLogin} // we will handel the login logic
                        ref={c=>{
                                this.Form=c;
                            }}>
                                        <div className="form-group">
                                            <label htmlFor="username"> Username</label> 
                                            
                                            <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    validations={[required]}
                                            />
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="password"> Password</label> 
                                            
                                            <Input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.passwords}
                                                    onChange={this.onChangePassword}
                                                    validations={[required]}
                                            />
                                        </div> 
                                        <div className="form-group">
                                           
                                            <button
                                                className="btn btn-primary btn-block"
                                                disabled={this.state.loading}
                                                >                                               {
                                                this.state.Login && (
                                                        <div className="form-group">
                                                            <div className="alert alert-danger" role="alert" >
                                                                {this.state.message}
                                                            </div>
                                                        </div>
                                                    )
                                                    }                                               }                                                  className="form-control"
                                                   <span>Login</span>
                                            </button>
                                        </div> 
                                       
                                       {
                                           this.state.message &&(
                                               <div className="form-group">
                                                   <div className="alert alert-danger" role="alert">
                                                       {
                                                           this.state.message
                                                       }
                                                    </div> 
                                               </div>
                                           )
                                       }
                                        <CheckButton
                                            style={{display:"none"}}
                                            ref={
                                                c=>{
                                                    this.checkBtn=c;
                                                }}
                                        />
                       </Form>
                    </div> 
            </div>
        )
    }
}

// email|username
// password


