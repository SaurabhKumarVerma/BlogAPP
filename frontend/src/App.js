// import logo from './logo.svg';
import Protected from '../src/Component/Protected/Protected'
import Register from './Component/Register/Register';
import Login from './Component/Login/Login'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Landing from './Component/Landing/Landing';
import Create from './Component/Blog/CreateBlog/Create';
import Details from './Component/Blog/BlogDetail/Details';
import EditBlog from './Component/Blog/BlogDetail/EditBlog/EditBlog';
import Logout from './Component/Logout/Logout';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
        
         
          <Protected path='/edit' component={EditBlog}/>
          <Protected path='/details' component={Details}/>
          <Protected path='/create' component={Create}/>
          <Protected path='/landing' component={Landing}/>
          <Protected path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Protected path='' component={Home}/>
          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
