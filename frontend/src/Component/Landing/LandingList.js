import React, { Component } from 'react'
import './Landing.css'
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
    container :{
        display: 'inline',
        float: 'left',
        // margin_rigth:'60px',
        margin: '10px',
        margin_left: '0px',
        // heigth: '19rem',
        width: '31.712rem',
        // padding_right:'10rem'
        
    }
}


export default class LandingList extends Component {
    render() {
        const {list,handleRead} = this.props
        return (
            <>
            <br/>
            
            <div className="row" style={style.container}>

                <div className="col-lg-6 mx-auto">

                    <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">

                        <p className="blockquote-footer pt-4 mt-4 border-top" id='title'>{list.blog_title}</p>

                        <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"><FontAwesomeIcon icon={faQuoteLeft} /></i></div>
                        <p className="mb-0 mt-2 font-italic">{list.blog_text.slice(0, 50)}</p>
                        <br/>
                        <center><button type="button" className="btn btn-success" onClick={() => handleRead(list)}>Read</button></center>
                    </blockquote>

                </div>
            </div>

            </>
        )
    }
}
