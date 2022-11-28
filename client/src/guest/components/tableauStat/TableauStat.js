import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect , useState} from "react";
import { CrudCanalService } from './../../../admin/components/CrudProjet/CrudCanal.service';
import { CrudService } from './../../../service/Crud.service.js';
import './tableauStat.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const TableauStat = (props) => {
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
   useEffect(() => {
    Aos.init({duration: 2000 });
   },[])
   return (
   <div id="map"/>,
   <Row>
   <Col sm={6}>
        <div className=''><HighchartsReact highcharts={Highcharts} options={cercle} /></div>
    </Col>
   
    <div className='grids'>
            <div  data-aos="fade-left" className='boxes' >Nombre de pompe</div>
            <div data-aos="fade-up" className='boxes'>Nombre de réservoire d'eau</div>
        </div>
  
        
       <a href="#">Canalisation</a>
  
   {/* <Col sm={6}>
       <div className="bas-sexe1">
           <h5></h5>
               <HighchartsReact highcharts={Highcharts} options={donut} />
               <p>Total nombre de canalisation</p>
       </div>
   </Col> */}
   </Row>
   )
}
export default TableauStat;
