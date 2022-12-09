import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect , useState} from "react";
import CrudCanalService from '../../../service/CrudCanal.service';
import './tableauStat.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
const TableauStat = (props) => {


   // ty le donut anle canalisation
   const [donutsData, setdonutsData] = useState([]);
   useEffect(() => {
   CrudCanalService. nbrCanalisation()
       .then(rep => {
           // setprobleme(rep.data);
           let dataDonutsPb = [];
           console.log('cana', rep);
           for (let i = 0; i < rep.data.length; i++) dataDonutsPb.push([rep.data[i].region, parseInt(rep.data[i].nombre)])
           setdonutsData(dataDonutsPb);
       })
       .catch(err => {
           console.log(err);
       })
   }, []);

   const donut ={
       chart: {
           plotBackgroundColor: null,
           plotBorderWidth: 0,
           plotShadow: false
       },
       title: {
           text: 'Canalisation<br>par<br>Région<br>',
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


    //le animation scroll kely
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    //nombre de projet en cours et finis 
    const [projetFini, setProjetFini] = useState([]);
    const projetFinit = async () => {
        const response = await CrudCanalService.finitionProjet();
        console.log(response);
        if (response.status === 200) {
            setProjetFini(response.data);
        }
        else {
            throw new Error("Failed to fetch users");
        }
    }
    useEffect(() => { projetFinit() }, []);

    
   const titre ={
    fontSize: 19,
    color:"white",
}
 const styleObj = {
 
 fontSize: 28,
 color:"white",
 }
   return (
   <div id="map"/>,
   <Row>
        <Col sm={6}>
            <div className="bas-sexe1">
               <HighchartsReact highcharts={Highcharts} options={donut} />
            </div>
        </Col>
               <div className='grids '>
               <div data-aos="fade-up" className='boxes p-2  p-'><p className="text-monospace text-center" style={titre}><HighlightOffIcon />Projets   {projetFini[2]?.nom} </p>
                   <p className="text-center"  style={styleObj}>{projetFini[2]?.encours}</p> 
                </div>
                <div data-aos="fade-up"  className='boxes3 p-2 -p '><p className="text-monospace text-center" style={titre}><HourglassTopIcon />Projets {projetFini[1]?.nom}  </p>
                   <p className="text-center"  style={styleObj}>{projetFini[1]?.encours}</p> 
                </div>
                <div  data-aos="fade-left" className='boxes2 p-2  p-' ><p className="text-monospace text-center" style={titre}><CheckCircleOutlineIcon />Projets   {projetFini[0]?.nom} </p>   
                       <p className="text-center" style={styleObj}>{projetFini[0]?.encours}</p>
                </div>  
                </div>
   </Row>
   )
}
export default TableauStat;
