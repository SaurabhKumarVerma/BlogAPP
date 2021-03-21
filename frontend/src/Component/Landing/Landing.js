// import axios from 'axios'
import React from 'react'
import Header from '../../Header/Header'
import axios from 'axios'
import LandingList from './LandingList'
import ReadBlog from './ReadBlog'
import './Landing.css'
export default class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            blogDetails : [],
            readOnly:false,
            tempReadStore:{}
        }
    }    
    componentDidMount () {
        this.setState({username: localStorage.getItem('username') })
        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token')}
        };
        console.log(this.state)
        axios.get(`http://127.0.0.1:8000/all_blog/`,config)
            .then(res =>{
                console.log(res.data)
                this.setState({blogDetails:res.data.all_blog})
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleRead = (val) =>{
        this.setState({readOnly:true, tempReadStore:val}, () =>{
            console.log(this.state.readOnly,'Flag')
            console.log(this.state.tempReadStore,'TempSTore')
        })
        
    }

    render(){
        const {readOnly} = this.state
        return(
            <>
                <Header/>
                <div>
                
                
                {!readOnly && this.state.blogDetails.map((item,index) =>{
                       
                        
                        return <LandingList key={index} list={item} data_id={item.id}  handleRead={this.handleRead}/>
                        
                    })}                            
                    {readOnly && <ReadBlog editBlog={this.state.tempReadStore} handleSubmit={this.handleSubmit} />}
                     <br></br>
                </div>
                <br/>
            </>
        )
    }
}