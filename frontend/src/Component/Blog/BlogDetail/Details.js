import React, { Component } from 'react'
import axios from 'axios'
import DetailList from './DetailList/DetailList';
import EditBlog from './EditBlog/EditBlog';
import Header from '../../../Header/Header'
export default class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            blogDetails : [],
            // blogTitles: [],
            id : '',
            editMode : false,
            tempStore : {}
            
        }
    }
    componentDidMount (){
        console.log(localStorage.getItem('id'), 'User Id')
        this.setState({id:localStorage.getItem('id')})
        // console.log(this.state)
        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token')}
        };
        console.log(this.state)
        axios.get(`http://127.0.0.1:8000/user_blog/${localStorage.getItem('id')}`,config)
            .then(res =>{
                console.log(res.data)
                this.setState({blogDetails:res.data.user_blog})
                // this.setState({blogTitles:res.data.title_list})
                // console.log(res.data)
                console.log('Loding.......')
                // console.log(this.state)
                localStorage.setItem('blog_id', res.data.user_blog.id)
                console.log(localStorage.getItem('blog_id'),'id')
            })
            .catch(error => {
                console.log(error)
            })
       
    }
    
    handleDelete =(e) =>{
        
        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                    
            }
        };
            
            axios.delete(`http://127.0.0.1:8000/blog_delete/${e}`,config)
                .then(res =>{
                    
                    // console.log(res.data)
                    
                }).catch(errors =>{
                    console.log(errors)
                })
                window.location.reload();      
    }

    
    handleEdit = (val) =>{
        this.setState({editMode:true, tempStore:val}, () =>{
            console.log(this.state.editMode,'Flag')
            console.log(this.state.tempStore,'TempSTore')
        })
        
    }

    handleSubmit = (val) =>{
        let index = -1
        this.state.blogDetails.find((item,ind) =>{
            if(item.id === val.id){
                index = val.id
                
            }
        })

        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token')}
        };
            
            axios.put(`http://127.0.0.1:8000/blog_update/${index}/`,val,config)
                .then(res =>{
                        console.log(res.data,'Update Item')
                }).catch(errors =>{
                    console.log(errors)
                })

        this.setState({blogDetails:[...this.state.blogDetails.slice(0,index), {...this.state.blogDetails[index], ...val}, this.state.blogDetails.slice(index+1)]})
        window.location.reload();
       
    }

    render() {
        const {editMode} = this.state
        return (
            <>  
                <Header/>
                
                        {!editMode && this.state.blogDetails.map((item,index) =>{
                                // console.log(item,'item')
                                
                                return <DetailList key={index} list={item} data_id={item.id} onClick={this.handleDelete} handleEdit={this.handleEdit}/>
                                
                            })}                            
                            {editMode && <EditBlog editBlog={this.state.tempStore} handleSubmit={this.handleSubmit}/>}
                    <br></br>
            </>
             
               
            
        )
    }
}
