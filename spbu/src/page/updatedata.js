import { useState, useEffect } from "react"
import React from 'react'
import Axios from 'axios'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import * as react from 'react-bootstrap'

export default function tambahdata(props) {
  const [val, setData] = useState({});

  useEffect(() => {
      let url = props.location.pathname.toString();
      let id = url.split("/")[2];
      Axios.get("http://localhost:3001/api/tampil/" + id)
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          })
          .catch(err => {
            console.log(err);
          });
  }, []);
  const submitButton = (e) => {
      e.preventDefault()
      let url = props.location.pathname.toString();
      let id = url.split("/")[2];
      Axios.put('http://localhost:3001/api/update/' + id, val)
      .then(function (response) {
          console.log(response)
          props.history.push('/laporan')
      }).catch(
        err => console.log(err)
      )
  }

    const handleChange = (event) => {
      const {name, value} = event.target
      setData(prevState => ({...prevState, [name] : value}))
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Update Data</h2>
                          <form key={val.id}>
                                <div className="form-group">
                                  <label>Timestamp </label>
                                  <input type="text" className="form-control" placeholder="Timestamp"
                                    name="timestamp"
                                    value={val.timestamp}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Nama Pelaksana</label>
                                  <input type="text" className="form-control" placeholder="Nama Pelaksana"
                                    name="nama_pelaksana"
                                    value={val.nama_pelaksana}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>NIK </label>
                                  <input type="text" className="form-control" placeholder="NIK"
                                    name="nik"
                                    value={val.nik}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>SUMBER WO</label>
                                  <input type="text" className="form-control" placeholder="Sumber wo"
                                    name="sumberwo"
                                    value={val.sumberwo}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>NO SPBU </label>
                                  <input type="text" className="form-control" placeholder="No SPBU"
                                    name="nospbu"
                                    value={val.no_spbu}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Kerusakan</label>
                                  <input type="text" className="form-control" placeholder="Kerusakan"
                                    name="kerusakan"
                                    value={val.kerusakan}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Tindakan</label>
                                  <input type="text" className="form-control" placeholder="Tindakan"
                                    name="tindakan"
                                    value={val.tindakan}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Lain-Lain</label>
                                  <input type="text" className="form-control" placeholder="Lain-Lain"
                                    name="dll"
                                    value={val.dll}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>TANGGAL</label>
                                  <input type="text" className="form-control" placeholder="Tanggal"
                                    name="tanggal"
                                    value={val.tanggal}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                  <label>Status</label>
                                  <RadioGroup aria-label="status" name="status" value={val.status} onChange={handleChange}>
                                    <FormControlLabel value="CLOSE" control={<Radio />} label="CLOSE" />
                                    <FormControlLabel value="OPEN" control={<Radio />} label="OPEN" />
                                  </RadioGroup>
                                </div>
                                <button type="submit" onClick={(e) => submitButton(e)} className="btn btn-success btn-lg btn-block">Update Data</button>
                                <react.Button href="/laporan" variant="primary" size='lg' block>Kembali</react.Button>
                          </form>
                        </div>
                </div>
        </div>
    )
}
