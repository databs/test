import { useState } from "react"
import React from 'react'
import Axios from 'axios'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import * as react from 'react-bootstrap'

export default function tambahdata(props) {
    const submitButton = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/tambah', {
        timestamp: timestamp,
        nama_pelaksana: nama_pelaksana,
        nik: nik,
        sumberwo: sumberwo,
        no_spbu: no_spbu,
        kerusakan: kerusakan,
        tindakan: tindakan,
        dll: dll,
        tanggal: tanggal,
        status: status
      }).then(function (response) {
            props.history.push('/laporan')
      }).catch(
          err => console.log(err)
      )
    }

    const [timestamp, setTimestamp] = useState('')
    const [nama_pelaksana, setNamapelaksana] = useState('')
    const [nik, setNIK] = useState('')
    const [sumberwo, setSumberwo] = useState('')
    const [no_spbu, setNospbu] = useState('')
    const [kerusakan, setKerusakan] = useState('')
    const [tindakan, setTindakan] = useState('')
    const [dll, setDLL] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [status, setStatus] = useState('')

    const handleChange = (event) => {
      setStatus(event.target.value);
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Tambah Data</h2>
                            <form>
                                <div className="form-group">
                                    <label>Timestamp </label>
                                     <input type="text" className="form-control" placeholder="Timestamp"
                                     name="timestamp"
                                     onChange={(e) =>{
                                         setTimestamp(e.target.value);
                                     }}
                                     required/>
                                </div>
                                <div className="form-group">
                                    <label>Nama Pelaksana</label>
                                    <input type="text" className="form-control" placeholder="Nama Pelaksana"
                                    name="nama_pelaksana"
                                    onChange={(e) =>{
                                        setNamapelaksana(e.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>NIK </label>
                                     <input type="text" className="form-control" placeholder="NIK"
                                     name="nik"
                                     onChange={(e) =>{
                                         setNIK(e.target.value);
                                     }}
                                     />
                                </div>
                                <div className="form-group">
                                    <label>SUMBER WO</label>
                                    <input type="text" className="form-control" placeholder="Sumber wo"
                                    name="sumberwo"
                                    onChange={(e) =>{
                                        setSumberwo(e.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>NO SPBU </label>
                                     <input type="text" className="form-control" placeholder="No SPBU"
                                     name="nospbu"
                                     onChange={(e) =>{
                                         setNospbu(e.target.value);
                                     }}
                                     />
                                </div>
                                <div className="form-group">
                                    <label>Kerusakan</label>
                                    <input type="text" className="form-control" placeholder="Kerusakan"
                                    name="kerusakan"
                                    onChange={(e) =>{
                                        setKerusakan(e.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tindakan</label>
                                    <input type="text" className="form-control" placeholder="Tindakan"
                                    name="tindakan"
                                    onChange={(e) =>{
                                        setTindakan(e.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Lain-Lain</label>
                                    <input type="text" className="form-control" placeholder="Lain-Lain"
                                    name="dll"
                                    onChange={(e) =>{
                                        setDLL(e.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>TANGGAL</label>
                                    <input type="text" className="form-control" placeholder="Tanggal"
                                    name="tanggal"
                                    onChange={(e) =>{
                                        setTanggal(e.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <RadioGroup aria-label="status" name="status1" value={status} onChange={handleChange}>
                                        <FormControlLabel value="CLOSE" control={<Radio />} label="CLOSE" />
                                        <FormControlLabel value="OPEN" control={<Radio />} label="OPEN" />
                                    </RadioGroup>
                                </div>
                                    <button type="submit" onClick={(e) => submitButton(e)} className="btn btn-success btn-lg btn-block">Tambah Data</button>
                                    <react.Button href="/laporan" variant="primary" size='lg' block>Kembali</react.Button>
                            </form>
                        </div>
                </div>
        </div>
    )
}
