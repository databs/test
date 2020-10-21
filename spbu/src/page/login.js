import React, { useState } from 'react'
import './login.css'
import Axios from 'axios'

export default function login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3001/login', {email: email, password: password})
    .then((response) => {
      console.log(response)
      if (response.data.token) {
        localStorage.setItem("Token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data))
        window.location = '/laporan'
      }else{
        console.log('Salah Email/Password');
        window.location = '/login'
      }
    }).catch(
        err => console.log(err)
    )
  }
   return (
       <div className="container">
           <div className="row justify-content-center">
                   <div className="col-md-6">
                   <h2>Login Sistem</h2>
                       <form>
                           <div className="form-group">
                               <label>Email </label>
                                 <input type="email" className="form-control" placeholder="Masukan email anda"
                                   onChange={(e) => setEmail(e.target.value)}
                                   />
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" className="form-control" placeholder="Password"
                                 onChange={(e) => setPassword(e.target.value)}
                                 />
                           </div>
                               <button type="submit" onClick={login} className="btn btn-primary btn-lg btn-block">Submit</button>
                       </form>
                   </div>
           </div>
       </div>
   )
}
