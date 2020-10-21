import React, { useState, useEffect } from 'react'
import './user.css'
import * as ImIcons from 'react-icons/im'
import * as AiIcons from 'react-icons/ai'
import Axios from 'axios'

export default function user (props) {
  const [sata, setSata] = useState('')

  // For UseEffect
  useEffect(() => {
  if (!localStorage.getItem("Token")) {
    alert('Session expired');
    window.location = '/login';
  } else {
    const item = JSON.parse(localStorage.getItem("user")).data;
    if (item) {
      Axios.get('http://localhost:3001/profile/' + item.id)
      .then((response) => {
        const object = Object.assign({}, response.data)
        const one = object[Object.keys(object)[0]]
        console.log(one);
        setSata(one)
      })
    } else {
      console.log('error');
    }
  }
}, []);
  const upload = () => {
    props.history.push('/upload')
  }

        return (
          <>
            <div className="laman">
                <div className="card1">

                    <div style={{width: '200px',height: '200px',margin: 'auto',overflow: 'hidden',border: '2px solid black', borderRadius: '50%'}}>
                        <img src={ sata ? require(`../../../service/public/gambar/${sata.image}`) : require('../gambar/1.png') } alt='john' style={{width: '200px'}}/>
                    </div>
                    <h1>{sata.nama_teknisi}</h1>
                    <p className="title">{sata.jabatan}</p>
                    <p>Telkom Witel</p>
                     {/* eslint-disable-next-line */}
                        <a className="a" href="#section" target="_blank"><AiIcons.AiOutlineTwitter/> Twitter</a>
                        {/* eslint-disable-next-line */}
                        <a className="a" href="#section" target="_blank"><ImIcons.ImFacebook2/> Facebook</a>
                    <hr/>
                    <p><button className="s" onClick={upload}>Upload Image</button></p>
                </div>
                <div className="card2">
                    <h1 style={{marginRight: '120px'}}>Profile</h1>
                    <hr/>
                    <div className="input">
                        <div className="inputitem">
                        <label>Nama</label>
                        <input type="text" className="form-control" placeholder="Nama" id="name" name="name" defaultValue={sata.nama_teknisi}/>
                        </div>
                        <div className="inputitem">
                        <label>Email</label>
                      <input type="text" className="form-control" placeholder="Email" id="email" name="email" defaultValue={sata.email}/>
                        </div>
                        <div className="inputitem">
                        <label>Jabatan</label>
                        <input type="text" className="form-control" placeholder="Jabatan" id="jabatan" name="jabatan" defaultValue={sata.jabatan}/>
                        </div>
                        <div className="inputitem">
                        <label>Negara</label>
                        <input type="text" className="form-control" placeholder="Negara" id="negara" name="negara" defaultValue={sata.negara}/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
}
