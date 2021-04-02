import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2';
import './Breakdown.css'
 
const CanadaMC = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Female To Male',
        data: [10, 9],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  const FinlandMC = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Female To Male',
        data: [8, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

export class Breakdown extends React.Component {

    render () {
        return (
            <div class="no-padding">
            <div class="row">
                <div class="col-md-6 no-padding">
                <Doughnut 
                    data = {CanadaMC}>
                </Doughnut>  
                </div>
                <div class="col-md-6 no-padding">
                <Doughnut
                    data={FinlandMC}>
                </Doughnut> 
                </div>
            </div>
            </div>
)
    }
};

