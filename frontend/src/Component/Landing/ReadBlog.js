import React, { Component } from 'react'
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
    container :{
        display: 'inline',
        float: 'left',        
        margin: '100px',
    },
    color:{
        color:'black',
        fontSize: '25px'
    }
}

export default class ReadBlog extends Component {
    constructor(props){
        super(props)
        this.state={
            blog_title:this.props.editBlog.blog_title,
            blog_text:this.props.editBlog.blog_text
        }
    }
    render() {
        return (
            <div>
                <br/>
                <br/>
                <div class="row" >

                    <div class="col-lg-6 mx-auto">

                        <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">

                            <p class="blockquote-footer pt-4 mt-4 border-top" style={style.color} id='title'>{this.state.blog_title}</p>

                        <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"><FontAwesomeIcon icon={faQuoteLeft} /></i></div>
                            <p class="mb-0 mt-2 font-italic">{this.state.blog_text}</p>
                       
                </blockquote>

</div>
</div>
            </div>
        )
    }
}
