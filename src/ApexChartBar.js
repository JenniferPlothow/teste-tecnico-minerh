import Chart from "react-apexcharts";
import React, {
    Component
} from "react";

class ApexChartBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    zoom: {
                        enabled: true,
                        type: 'x',
                        autoScaleYaxis: false,
                    }
                },
                plotOptions: {
                    bar: {

                        borderRadius: 10,
                        horizontal: true,

                    }

                },
                dataLabels: {
                    enabled: false,
                    style: {
                        colors: ['#Ffffff']
                    },
                },yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: ['#ffffff'],
                            fontWeight:400,
                        },
                    }
                },
                xaxis: {
                  max: 1600,
                    categories: ['Ben Fatto', 'Passarelli', 'Falconi', 'Raízen', 'Pirelli', 'SLC-Agrícola','OLX',
                        'Cogna', 'Faber-Castel', 'VIVO'
                    ],
                    labels: {
                        show: true,
                        style: {
                            colors: ['#FFFFFF']
                        },
                    }
                },
                fill: {
                    colors: ['#8ED471']

                }
            }

        };
    }


    render() {
        return (

            <div id = "chartbar" >
            <
            Chart options = {
                this.state.options
            }
            series = {
                this.state.series
            }
            type = "bar"
            height = "350px"
            width = "760px" / >
            </div>

        );
    }
}

export default ApexChartBar;