import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import images from '../../../../images/post.png'


export default class EditBlog extends Component {
    constructor(props){
        super(props)
        this.state={
            blog_title:this.props.editBlog.blog_title,
            blog_text: this.props.editBlog.blog_text,
            blog_Author: this.props.editBlog.blog_Author_id,
            id: this.props.editBlog.id

        }
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name] : evt.target.value})
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <>
               
                <div className="container-fluid">
                {console.log(this.state)}
                    {console.log(this.props.editBlog.id,'EditBlog')}
                    
                        {/* <input type='text' value={this.state.blog_title} name='blog_title' placeholder="Blog TITLE" onChange={this.handleChange}/>
                        <input type='textArea' value={this.state.blog_text} name='blog_text'placeholder="BLOG TEXT" onChange={this.handleChange}/>
                        <br/>
                        
                        <button type='submit' onClick={() => handleSubmit(this.state)}>UPDATE</button>
                        */}
                        <div className="contact1">
                            <div className="container-contact1">
                                <div className="contact1-pic js-tilt" data-tilt>
                                    <img src={images} alt="IMG"/>
                                </div>

                                <form className="contact1-form validate-form">
                                    <span className="contact1-form-title">
                                        UPDATE POST
                                    </span>

                                    
                                    <div className="wrap-input1 validate-input" data-validate = "Subject is required">
                                        <input className="input1" type="text" value={this.state.blog_title} name='blog_title' onChange={this.handleChange} placeholder="Blog TITLE"/>
                                        <span className="shadow-input1"></span>
                                    </div>

                                    <div className="wrap-input1 validate-input" data-validate = "Message is required">
                                        <textarea className="input1" value={this.state.blog_text} name='blog_text' placeholder="BLOG TEXT" onChange={this.handleChange}></textarea>
                                        <span className="shadow-input1"></span>
                                    </div>

                                    <div className="container-contact1-form-btn">
                                        <button className="contact1-form-btn" type='submit' onClick={() => handleSubmit(this.state)}>
                                            <span>
                                            UPDATE POST
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
