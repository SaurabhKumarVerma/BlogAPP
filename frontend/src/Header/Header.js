import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Nav,NavDropdown,Navbar } from 'react-bootstrap';



const style = {
    color:{
        color:'white',
        fontSize: '25px'
    }
}
export default class Header extends React.Component{
    

    render(){
        return(
            

                <Navbar bg="dark" expand="lg">
                <Navbar.Brand ><Link to="/landing" style={style.color}>Blog</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <Nav.Link  ><Link to='/landing' style={style.color}>All Blog</Link></Nav.Link>
                    <NavDropdown id="basic-nav-dropdown">
                        <NavDropdown.Item ></NavDropdown.Item>
                            {
                                localStorage.getItem('username') ?
                                <>
                                    <NavDropdown.Item><Link to='/create' style={style.color}>Create Blog</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/logout' style={style.color}>Log Out</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/details' style={style.color}>User Blog</Link></NavDropdown.Item>
                                    
                                </>
                                :
                                <>
                                    <NavDropdown.Item><Link to='/login' style={style.color}>Login</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/register' style={style.color}>Register</Link></NavDropdown.Item>
                                </>
                            }
                        <NavDropdown.Divider />
                        
                    </NavDropdown>
                    </Nav>
                       {
                           localStorage.getItem('username') ?
                           <>
                                <div inline>
                    
                                    <Nav.Link  ><Link to='/create' style={style.color}>Create Blog</Link></Nav.Link>
                                </div>

                                <div inline>
                                
                                    <Nav.Link ><Link to='/logout' style={style.color}>Logout</Link></Nav.Link>
                                </div>

                                <div inline>
                                
                                    <Nav.Link ><Link to='/details'style={style.color}>User Blog</Link></Nav.Link>
                                </div>       
                           </> 
                           :
                           <>
                                    <div inline>
                                        <Nav.Link ><Link to='/login' style={style.color}>Login</Link></Nav.Link>
                                    </div>

                                    <div inline>
                                        <Nav.Link ><Link to='/register' style={style.color}>Register</Link></Nav.Link>
                                    </div>
                           </>
                       }
                    
                    

                    
                    
                </Navbar.Collapse>
                </Navbar>
                
        )
    }
}