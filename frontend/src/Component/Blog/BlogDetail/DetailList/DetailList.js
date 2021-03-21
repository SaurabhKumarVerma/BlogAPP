import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
    container :{
        display: 'inline-block',
        float: 'left',
        // margin_rigth:'60px',
        margin: '40px',
        margin_left: '60px',
        // heigth: '19rem',
        width: '25.2rem',
        // padding_right:'10rem'
        
    }
}
export default class DetailList extends Component {
    render() {
        const {list,onClick,data_id,handleEdit} = this.props
        return (
            <>  
                <br></br>
                    <div className="card-deck p-1 shadow-lg p-3 mb-5 bg-white rounded" style={style.container} >
                        <div className="card" id='main'>
                        <p className="pt-4 mt-4 border-top"><FontAwesomeIcon icon={faQuoteLeft} /></p>
                            <div className="card-body">
                                <h5 className="card-title">{list.blog_title}</h5>
                                <p className="card-text">{list.blog_text.slice(0, 50)}</p>

                                <div className="d-flex">
                                    <div className="p-2">
                                        <div className="btn-group " role="group">
                                            <button type="button " className="btn btn-primary" onClick={() => handleEdit(list)}>Update</button>&nbsp;
                                            <button type="button" className="btn btn-danger" onClick={() => onClick(data_id)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="ml-auto p-2">
                                        <p className="card-text d-flex flex-row-reverse"><small className="text-muted">{list.blog_date}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      
               

            </>
        )
    }
}
