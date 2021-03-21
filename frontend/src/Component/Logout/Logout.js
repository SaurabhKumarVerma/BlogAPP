import axios from 'axios'
import React, { Component } from 'react'

export default class Logout extends Component {

    componentDidMount () {
        
        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('refresh_token')}
        };
        console.log(this.state)
        axios.post(`http://127.0.0.1:8000/logout/`,config)
            .then(res =>{
                console.log(res.data)
               
            })
            .catch(error => {
                console.log(error)
            })
            localStorage.clear()
            
            this.props.history.push('/login')
            
    }


    render() {  
        return (
            <div>
               
                
            </div>
        )
    }
}
