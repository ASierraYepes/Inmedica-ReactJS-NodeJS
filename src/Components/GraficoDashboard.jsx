import React from 'react'

export default function GraficoDashboard() {
    
    return (
        <>
            <div class="card-body">
                <canvas id="myChart" width="300" height="150"></canvas>
            </div>
            {/* <script>
                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Ene ', 'Feb ', 'Mar ', 'Abr ', 'May ', 'Jun ',  'Ago ',  'Sep ',  'Oct ',  'Nov ',  'Dic ',],
                        datasets: [{
                            label: 'Resultados',
                            data: [50, 100, 150, 200, 120, 180, 130, 90, 140, 190, 230],
                            backgroundColor: [
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                                    '#B81C09',
                            ],
                            maxBarThickness: 30,
                            maxBarLength: 2
                     }]
             },
                options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                            }
                        }]
                    }
                }
            });
            </script> */}
            
        </>
    )
}
