import React, { useEffect, useState } from 'react'
import MiniChart from 'react-mini-chart'
import './laporan.css'
import * as react from 'react-bootstrap'
import Axios from 'axios'
import {Link} from 'react-router-dom';

export default function laporan() {
    const [Data, setData] = useState([]);
    const deletedata = (id) => {
        /**
         * ketika memanggil endpoint yg lain juga harus menggunakan token yg diambil dari localstorage
         */
        Axios.delete(`http://localhost:3001/api/deletedata/${id}`)
        .then(() => {
          window.location.reload(false);
        })
    }
    
    useEffect(() => {
        if(localStorage.getItem("Token")){
            let token = localStorage.getItem("Token").toString()
            Axios.get("http://localhost:3001/api/tampildata", {headers: {'authorization': `Bearer ${token}`}})
            .then((response) => {
                console.log(response.data)
                if (response.data.invalid) {
                    alert("Session Expired")
                    window.location = "/login"
                } else {
                    setData(response.data)    
                }
                
            })
            .catch(err => {
                console.log(err);
            });
        }else{
            window.location = "/login"
        }
        
    }, []);
    return (
        <div>
            <div className="laporan">
                {/* Minichart For Live Statik */}
                <div className="minichart">
                    <p style={{fontSize: '20px', marginBottom: '-3px'}}>Statik Data</p>
                    <MiniChart strokeColor="#FF6600" activePointColor="#FF6600" dataSet={[0, -20, -343, 49.3, 300, 200, 78]}/>
                </div>
                <div className="minichart">
                    <p style={{fontSize: '20px', marginBottom: '-3px'}}>Masukan Data</p>
                    <MiniChart dataSet={[0, -20, 100, 49.3, -90, -10, 78]}/>
                </div>
                <div className="minichart">
                    <p style={{fontSize: '20px', marginBottom: '-3px'}}>Data Live</p>
                    <MiniChart strokeColor="#FB0000" activePointColor="#FB0000" dataSet={[0, -20, -200, 49.3, -100, 200, 78]}/>
                </div>
                <div className="minichart">
                    <p style={{fontSize: '20px', marginBottom: '-3px'}}>Data Login</p>
                    <MiniChart strokeColor="#1B00FB" activePointColor="#1B00FB" dataSet={[0, -20, 343, 49.3, -100, 200, 78]}/>
                </div>
                <div className="data-tambah">
                    <react.Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Timestamp</th>
                                    <th>Nama Pelaksana</th>
                                    <th>NIK</th>
                                    <th>SUMBER WO (WA, CALL, TELEGRAM, NO TIKET)</th>
                                    <th>NO SPBU</th>
                                    <th>Kerusakan</th>
                                    <th>Tindakan</th>
                                    <th>Lain-Lain</th>
                                    <th>TANGGAL</th>
                                    <th>STATUS</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data.map((val) => {
                                    return(
                                        <tr key={val.id}>
                                            <td>{val.timestamp}</td>
                                            <td>{val.nama_pelaksana}</td>
                                            <td>{val.nik}</td>
                                            <td>{val.sumberwo}</td>
                                            <td>{val.no_spbu}</td>
                                            <td>{val.kerusakan}</td>
                                            <td>{val.tindakan}</td>
                                            <td>{val.dll}</td>
                                            <td>{val.tanggal}</td>
                                            <td>{val.status}</td>
                                            <td>
                                                <button type="button" onClick={() => {deletedata(val.id)}} className="btn btn-danger btn-sm">Delete</button>
                                                <Link to={`/updatedata/${val.id}`} className="btn btn-primary btn-sm" role="button" aria-pressed="true">Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </react.Table>
                                <react.Button href="/tambahdata" variant="success">Tambah Laporan</react.Button>
                </div>
            </div>
        </div>
    )
}
