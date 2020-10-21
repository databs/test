import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from "mdbreact";
import './data.css'

class home extends React.Component {
state = {
    dataHorizontal: {
        labels: ['Januari', 'Febuari', 'Maret', 'April', 'Blue', 'Purple', 'Grey'],
        datasets: [
          {
            label: 'Dataset',
            data: [22, 33, 55, 12, 86, 23, 14],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }
        ]
      },
    dataLine: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Data Masuk",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Data Hapus",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(35, 26, 136)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(35, 26, 136)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
  dataDoughnut: {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Juma't"],
    datasets: [
      {
        data: [150, 50, 100, 40, 220],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  },
  dataPie: {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Juma't"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#AC64AD"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#DA92DB"
        ]
      }
    ]
  }
}

render() {
    return (
    <div className="container-custom">
        <div className="chart">
            <MDBContainer>
                <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
            </MDBContainer>
        </div>
        <div className="chart">
            <MDBContainer>
                <Line data={this.state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        </div>
        <div className="chart">
            <MDBContainer>
                <HorizontalBar
                data={this.state.dataHorizontal}
                options={{ responsive: true }}
                />
            </MDBContainer>
        </div>
        <div className="chart">
            <MDBContainer>
                <Pie data={this.state.dataPie} options={{ responsive: true }} />
            </MDBContainer>
        </div>
    </div>
    );
  }
}

export default home;