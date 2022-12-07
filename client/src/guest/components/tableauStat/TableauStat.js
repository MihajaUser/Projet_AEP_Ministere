import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect , useState} from "react";
import { CrudService } from './../../../service/Crud.service.js';
import './tableauStat.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
const TableauStat = (props) => {

    // anle cercle region
   const [cercleData, setCercleData]= useState([{}]);
  
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
   useEffect(() => {
    Aos.init({duration: 2000 });
   },[])
    const [projetFini, setProjetFini] = useState([]);

    useEffect(() =>{
        CrudService.finitionProjet()
            .then(rep =>
            {
                setProjetFini(rep.data);
                console.log(rep.data);
            })
            .catch(err =>
            {
                alert("Failed to fetch users");
        })

     }, []);

   const titre ={
       fontSize: 19,
       color:"white",
   }
    const styleObj = {
    
    fontSize: 28,
    color:"white",
    }
    //Raha to ka misy izy zay no dikanle ? ao @le vitanle tableau io
   return (
   <div id="map"/>,
   <Row>
   <Col sm={6}>
        <div className=''><HighchartsReact highcharts={Highcharts} options={cercle} /></div>
    </Col>
   
                <div className='grids '>
                <div  data-aos="fade-left" className='boxes p-2  p-' ><p className="text-monospace text-center" style={titre}><CheckCircleOutlineIcon />Projets   {projetFini[0]?.nom} </p>   
                <p className="text-center"  style={styleObj}>{projetFini[0]?.encours}</p>                        </div>
                   <div data-aos="fade-up" className='boxes2 p-2  p-'><p className="text-monospace text-center" style={titre}><HighlightOffIcon />Projets   {projetFini[1]?.nom} </p>
                   <p className="text-center"  style={styleObj}>{projetFini[1]?.encours}</p> 
                   </div>
                </div>

   
    <a href="tableauCanal">Canalisation</a>
   </Row>
   )
}
export default TableauStat;
