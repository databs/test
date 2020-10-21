import React, {useState,useEffect} from 'react';
import  SidebarData  from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";
import * as VscIcons from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons'

export default function Navbar() {
  const [sidebar,setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  const Logout = () => {
    localStorage.removeItem("Token")
    window.location = "/login"
  }

  const [sata, setSata] = useState('')
  useEffect(() => {
    const item = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).data : false
    if (item) {
      setSata(item)
    } else {
      console.log('error');
    }
}, []);

  const forlogin = (
      <li><a href="#s" onClick={Logout} className="link">Logout <AiIcons.AiOutlineLogout/></a></li>
  )
  const forlogout = (
      <li><Link to="/login" className="link">Login <AiIcons.AiOutlineLogin/></Link></li>
  )
  // const usernologin = (
  //   <li><Link to="/user" className="link">user</Link></li>
  // )
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#section" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <ul className="navbar-atas">
          <li><Link to="/user" className="link">{localStorage.getItem("Token") ? sata.nama_teknisi : 'user'} <AiIcons.AiOutlineUser/></Link></li>
          {localStorage.getItem("Token") ? forlogin : forlogout }
        </ul>


      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle' onClick={showSidebar}>
            <Link to="#section" className='menu-bars'>
              <VscIcons.VscClose/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                    <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li>
          <label className="lock">Made In <GiIcons.GiAmericanShield/> Defender</label>
          </li>
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}
