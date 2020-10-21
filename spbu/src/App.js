import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar.js';
// import Halaman from './Component/halaman.js';
import {Switch, Route} from 'react-router-dom';
import Home from './page/home'
import Laporan from './page/laporan'
import Data from './page/data'
import Login from './page/login'
import User from './page/user'
import Maps from './page/maps'
import SimpleMaps from './page/simplemaps'
import Tambahdata from './page/tambahdata'
import Updatedata from './page/updatedata'
import Upload from './page/upload'

class App extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/laporan' component={Laporan}/>
          <Route path='/data' component={Data}/>
          <Route path='/login' component={Login}/>
          <Route path='/user' component={User}/>
          <Route path='/maps' component={Maps}/>
          <Route path='/simple' component={SimpleMaps}/>
          <Route path='/tambahdata' component={Tambahdata}/>
          <Route path='/updatedata' component={Updatedata}/>
          <Route path='/upload' component={Upload}/>
        </Switch>
      </div>
    );
  }
}
export default App;
