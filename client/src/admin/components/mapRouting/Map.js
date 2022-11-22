import L from "leaflet";
import "./Style.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row, Col } from 'react-bootstrap';
import { CrudService } from './../CrudProjet/Crud.service.js';
import React, { useEffect , useState } from "react";
import { CrudCanalService } from './../CrudProjet/CrudCanal.service.js';
// const style = {
//   width: "100%",
//   height: "800px",
// };
// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
// });
const Map = (props) => {
   
//     useEffect(() => {
//     const getDataProjet = async () => {
//       const x = await CrudService. nbrProjet();
//       setMyProjet(x.data);
//     }
//     getDataProjet();
  
//   }, []);
 
//     useEffect(() => {
//         console.log(myProjet);
//     }, [myProjet])  
// ty le donut anle region
// useEffect(() => {
//     CrudService. nbrProjet()
//         .then(rep => {
//             // setprobleme(rep.data);
//             let dataDonutsPb = [];
//             console.log('cana', rep);
//             for (let i = 0; i < rep.data.length; i++) dataDonutsPb.push([rep.data[i].name, parseInt(rep.data[i].y)])
//             setdonutsData(dataDonutsPb);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }, []);
// ty le donut anle canalisation
    const [donutsData, setdonutsData] = useState([]);
    useEffect(() => {
    CrudCanalService. nbrCanalisation()
        .then(rep => {
            // setprobleme(rep.data);
            let dataDonutsPb = [];
            console.log('cana', rep);
            for (let i = 0; i < rep.data.length; i++) dataDonutsPb.push([rep.data[i].finLocalite, parseInt(rep.data[i].nombre)])
            setdonutsData(dataDonutsPb);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    
    // const region = ["Analamanga","Bongolava","Itasy","Vakinakaratra","Diana","Sava","Amoron'i Mania","Atsimo Atsinanana","Haute Matsiatra","Ihorombe","Vatovavy Fitovinany","Betsiboka","Boeny","Melaky","Sofia","Alaotra Mangoro","Analanjirofo","Atsinanana","Androy","Anosy","Atsimo Andrefana","Menabe"];
    const [cercleData, setCercleData]= useState([{}]);
    // anle cercle region
    useEffect(() => {
        CrudService. nbrProjet()
        .then(rep => {
            // setprobleme(rep.data);
            let dataCercle = [{}];
            console.log('MM', rep);
            for (let i = 0; i < rep.data.length; i++) dataCercle.push([rep.data[i].name,parseInt(rep.data[i].y)])
        setCercleData(dataCercle);
        })
        // .catch(err => {
        //     console.log(err);
        // })
    }, []);

    const cercle = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Statistiques des adductions'
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
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Share',
            data: cercleData,
            showInLegend: true
        }]
    };
    const donut ={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Canalisation<br>des<br>Localités<br>',
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
            data: donutsData,
            showInLegend: true
        }]
    }
    return (
    <div id="map"/>,
    <Row>
    <Col sm={6}>
        <div className="bas-sexe1">
            <h5></h5>
                <HighchartsReact highcharts={Highcharts} options={cercle} />
        </div>
    </Col>
    <Col sm={6}>
        <div className="bas-sexe1">
            <h5></h5>
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
