import React from "react";
import L from "leaflet";
import "./Style.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row, Col } from 'react-bootstrap';

// const style = {
//   width: "100%",
//   height: "800px",
// };
// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
// });
const Map = (props) => {
    const batton = {
        chart: {
            type: 'column'
        },
        title: false,
        // {
        // text: 'Proprietés des taches par mois'
        // },
        // subtitle: {
        //     text: 'Detail Planning'
        // },
        xAxis: {
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021'
            ],
            crosshair: true
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Million tonnes CO<sub>2</sub>-equivalents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            // const obj = {
            //     name:,
            //     data:[]
            // }
            name: 'Oil and gas extraction',
            data: [13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56,
                14.32, 14.13, 13.93, 13.21, 12.16]
    
        }, {
            name: 'Manufacturing industries and mining',
            data: [12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59,
                11.94, 11.96, 11.59, 11.42, 11.76]
    
        }, {
            name: 'Road traffic',
            data: [10.00, 9.93, 9.97, 10.01, 10.23, 10.26, 10.00,
                9.12, 9.36, 8.72, 8.38, 8.69]
    
        }, {
            name: 'Agriculture',
            data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55,
                4.53, 4.51, 4.49, 4.57]
    
        }]
    };
    const donut ={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>January<br>2022',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Chrome', 73.86],
                ['Edge', 11.97],
                ['Firefox', 5.52],
                ['Safari', 2.98],
                ['Internet Explorer', 1.90],
                {
                    name: 'Other',
                    y: 3.77,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    }
    return (
    <div id="map"/>,
    <Row>
    <Col sm={6}>
        <div className="bas-sexe1">
            <h5>Statistiques des adductions</h5>
                <HighchartsReact highcharts={Highcharts} options={batton} />
        </div>
    </Col>
    <Col sm={6}>
        <div className="bas-sexe1">
            <h5>Statistiques des Canalisation</h5>
                <HighchartsReact highcharts={Highcharts} options={donut} />
        </div>
    </Col>
    </Row>
    )
}
//   componentDidMount() {
//     this.map = L.map("map", {
//       center: [-18.865447, 47.519533],
//       zoom: 5.5,
//       layers: [
//         L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
//           attribution:
//             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         })
//       ]
//     });


//     var routeControl = L.Routing.control({
//       show: true,
//       fitSelectedRoutes: true,
//       plan: false,
//       lineOptions: {
//         styles: [
//           {
//             color: "blue",
//             opacity: "0.7",
//             weight: 6
//           }
//         ]
//       }
//     })
//       .addTo(this.map)
//       .getPlan();

//     var newLatLngA = new L.LatLng(-18.91475822499691, 47.52127235226638, "taskA");
//     var newLatLngB = new L.LatLng(-18.97889074319738, 47.54152839506674, "taskB");
//     var newLatLngC = new L.LatLng(65.05098, 25.474349, "taskc");

//     routeControl.setWaypoints([newLatLngA, newLatLngB]);
//   }
//   render() {
//     return <div id="map" style={style} />;
//   }

export default Map;
