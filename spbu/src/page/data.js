import React, { useState,useEffect } from 'react'
import * as react from 'react-bootstrap'
import './datajs.css'
import Axios from 'axios'
import jsPDF from "jspdf"
import "jspdf-autotable"

function data() {
    const [Data, setData] = useState([]);

    // Download to PDF
    const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Report Data";
    const headers = [["NO", "Timestamp", "Nama Pelaksana", "NIK", "SUMBER WO (WA, CALL, TELEGRAM, NO TIKET)", "NO SPBU", "Kerusakan", "Tindakan", "Lain-Lain", "TANGGAL", "STATUS"]];

    const data = Data.map(elt => [elt.id, elt.timestamp, elt.nama_pelaksana, elt.nik, elt.sumberwo, elt.no_spbu, elt.kerusakan, elt.tindakan, elt.dll, elt.tanggal, elt.status]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }
    // useEffect for menampilkan data
    useEffect(() => {
      if (localStorage.getItem('Token')) {
        let token = localStorage.getItem('Token').toString()
        Axios.get("http://localhost:3001/api/tampildata", {headers: {'authorization': `Bearer ${token}`}})
        .then((response) => {
          if (response.data.invalid) {
            alert('Session Exapired')
            window.location = '/login'
          }else {
            setData(response.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
      }else {
        window.location = '/login'
      }
    }, []);
    return (
        <div>
            <div className="data-download">
            <react.Table striped bordered hover variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>NO</th>
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
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((val) => {
                            return(
                                <tr key={val.id}>
                                    <td>{val.id}</td>
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
                                </tr>
                            )
                        })}
                    </tbody>
                </react.Table>
                <react.Button variant="success" onClick={() => exportPDF()}>Download PDF</react.Button>
            </div>
        </div>
    )
}

export default data
