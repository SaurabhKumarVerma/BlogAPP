
// import axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import images from '../../images/icon.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import { faMailBulk,faKey,faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../Header/Header'

import { Link } from 'react-router-dom'


export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            password:'',
            email:'',
            loginedin: false
            
        }
    }
   
    handleChange = async  (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    submitHandler = e =>{
        // const history = useHistory();

        e.preventDefault()
        
        
        // console.log(this.state)
        console.log(this.state.loginedin)
    
         axios.post('http://127.0.0.1:8000/login/',this.state)
            
            .then(res => {
                
                // res.send(this.state)
                console.log(res.data)
                // console.log(res.data.token)
                // this.props.history.push('/details')
                console.log('Successfully Login');
                // console.log(res.data.access)
                localStorage.setItem('access_token',res.data.access)
                localStorage.getItem('access_token')

                localStorage.setItem('username',res.data.username)
                localStorage.getItem('username')

                localStorage.setItem('id',res.data.userid)
                console.log(localStorage.getItem('id'))
                
                localStorage.setItem('password', res.data.password)

                this.setState({loginedin:true})
                console.log(this.state.loginedin)
                
               
            })
            .catch(error => {
                
                console.log(error.data)
                this.setState({loginedin:false})
                
                // localStorage.setItem('error',error.data)
                
                
            })
    }

    handleClick = () => {
        // this.props.history.push("/landing");
        if (this.state.loginedin === true){
            this.props.history.push('/details')
            
        }
        else{
            
            this.props.history.push("/login");
            toast('Incorrect UserName or Password')

            
        }
       
    }

    render() {
              
        const { password,email} = this.state
        
        return (
            <div>
                <Header/>
                <div></div>
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card">
                            <div className="d-flex justify-content-center">
                                <div className="brand_logo_container">
                                    <img src={images} className="brand_logo" alt="Logo"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center form_container">
                                <form onSubmit={this.submitHandler}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user"> <FontAwesomeIcon icon={faMailBulk} /></i></span>
                                        </div>
                                        <input type="text" name="email" className="form-control input_user" onChange={this.handleChange} value={email} placeholder="Email" required/>
                                    </div>
                                    
                                    <sub><small>Required Alphanumerica Password</small></sub>
                                    <div className="input-group mb-2">
                                        
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-key"><FontAwesomeIcon icon={faKey} /></i></span>
                                        </div>
                                        <input type="password" name='password' className="form-control input_pass" onChange={this.handleChange} value={password} placeholder="Password" required/>
                                    </div>

                                        <div className="d-flex justify-content-center mt-3 login_container">
                                            <button type='submit' name="button" onClick={this.handleClick} className="btn login_btn">Login</button>
                                        </div>
                                </form>
                            </div>
                    
                            <div className="mt-4">
                            
                                <div className="d-flex justify-content-center links">
                                 Don't have an account ?  <p className="ml-2"> <Link to='/register' ><FontAwesomeIcon icon={faUserPlus} /> &nbsp; Sign Up</Link></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
	                </div>

                    <ToastContainer />
                   
            </div>
        )
    }
}

export default Login