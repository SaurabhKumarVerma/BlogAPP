
// import axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import './create.css'
import images from '../../../images/post.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../../Header/Header'

import 'react-toastify/dist/ReactToastify.css';

export class Create extends Component {
    constructor(props){
        super(props)
        this.state={
            blog_title:'',
            blog_text:'',
            blog_Author: localStorage.getItem('id')
                       
        }
    }

    
   
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
       
    }
    
    submitHandler = e =>{
        
        e.preventDefault()
        
        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token')}
        };
        
        console.log(this.state)
         axios.post('http://127.0.0.1:8000/create_blog/',this.state,config)
            
            .then(res => {
                console.log(res.data)
                localStorage.getItem('access_token')
                console.log('Successfully Login');
                console.log(res.data)
                // console.log(localStorage.getItem('id'))
            })
            .catch(error => {
                console.log(error)
            })
            // await.timeout(100)
            this.props.history.push('/details')
            window.location.reload();
    }

    render() {
      
        const { blog_Author,blog_title,blog_text} = this.state
        
        return (

            <>   
                <Header/>
           
                <div className='container-fluid'>    
                    <div className="contact1">
                        <div className="container-contact1">
                            <div className="contact1-pic js-tilt" data-tilt>
                                <img src={images} alt="IMG"/>
                            </div>

                            <form className="contact1-form validate-form" onSubmit={this.submitHandler}>
                                <span className="contact1-form-title">
                                    Create POST
                                </span>
  

                                <div className="wrap-input1 validate-input" data-validate = "Subject is required">
                                    <input className="input1" type="text" name='blog_title' placeholder="Blog Title" onChange={this.handleChange} value={blog_title} required/>
                                                                    
                                
                                    <span className="shadow-input1"></span>
                                </div>

                                <input type='hidden'  placeholder='Blog Title' onChange={this.handleChange} value={blog_Author}></input><br/>
                                
                                <div className="wrap-input1 validate-input" data-validate = "Message is required">
                                    <textarea className="input1" name='blog_text' placeholder="Blog Details" onChange={this.handleChange} value={blog_text} required></textarea>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="container-contact1-form-btn">
                                    <button className="contact1-form-btn" type='submit' >
                                        <span>
                                            POST BLOG
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Create