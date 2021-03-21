
    // import axios from 'axios'
    import React, { Component } from 'react'
    import axios from 'axios'
    import './Register.css'
    import { faUser,faMailBulk,faKey } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import Header from '../../Header/Header'


    

    export class Register extends Component {
        constructor(props){
            super(props)
            
            this.state={
                username:'',
                firstname:'',
                lastname:'',
                password:'',
                email:''
            }
        }
        

            
        handleChange = (e) => {
            this.setState({[e.target.name]:e.target.value})
        }

        submitHandler = e =>{
            e.preventDefault()
            
            axios.post('http://127.0.0.1:8000/registation/',this.state)
                
                .then(res => {
                    
                    // res.send(this.state)
                    console.log(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
                // this.props.history.push("/login")
        }

        render() {
            const { username,firstname,lastname,password,email} = this.state
            return (
                <>  <Header/>
                                <div className="container">
                                <div className="myCard p-1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="myLeftCtn"> 
                                                <form className="myForm text-center" onSubmit={this.submitHandler}>
                                                    <header>Create new account</header>
                                                    <div className="form-group">
                                                        <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                                                        <input className="myInput" type="text" placeholder="Username" id="username" name='username' onChange={this.handleChange} value={username} required/> 
                                                       
                                                    </div>
                                                    <div className="form-group">
                                                        <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                                                        <input className="myInput" type="text" placeholder="First Name" id="firstname" name='firstname' onChange={this.handleChange} value={firstname} required/> 
                                                    </div>
                                                    <div className="form-group">
                                                        <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                                                        <input className="myInput" type="text" placeholder="Last Name" id="lastname" name='lastname' onChange={this.handleChange} value={lastname} required/> 
                                                    </div>
                                                    <sub><small>Required Alphanumerica special symbol Password</small></sub>
                                                    <div className="form-group">
                                                        <i className="fas fa-lock"><FontAwesomeIcon icon={faKey} /></i>
                                                        <input className="myInput" type="password" placeholder="Password" name='password' placeholder='Password' onChange={this.handleChange} value={password} required/> 
                                                    </div>
                                                    <div className="form-group">
                                                    <sub><small>abc@ab.com format will accept</small></sub><br/>
                                                        <i className="fas fa-envelope"><FontAwesomeIcon icon={faMailBulk} /></i>
                                                        
                                                        <input className="myInput" type='text' name='email' placeholder='Email'onChange={this.handleChange} value={email} required></input><br/>
                                                        
                                                    </div>
                                                    <button type='submit' className="butt">CREATE ACCOUNT</button>
                                                    
                                                </form>
                                            </div>
                                        </div> 
                                        <div className="col-md-6">
                                            <div className="myRightCtn">
                                                    <div className="box"><header>Register Now</header>
                                                    
                                                    </div>
                                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                            

                </>
            )
        }
    }

    export default Register