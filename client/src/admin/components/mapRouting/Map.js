import "./Style.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect , useState } from "react";
import { CrudService } from './../../../service/Crud.service';
import Aos from 'aos';
import "aos/dist/aos.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Map = (props) => {
      // anle cercle region adduction 
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
       const [projetFini , setProjetFini] = useState([]);
       const projetFinit = async () => {
        const response = await CrudService.  finitionProjet();
        console.log(response);
        if(response.status === 200) {
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
            <h5></h5>
                <HighchartsReact highcharts={Highcharts} options={cercle} />
        </div>
    </Col>
    <div className='grids '>
                <div  data-aos="fade-left" className='boxes p-2  p-' ><p className="text-monospace text-center" style={titre}><CheckCircleOutlineIcon />Projets   {projetFini[0]?.nom} </p>   
                <p className="text-center"  style={styleObj}>{projetFini[0]?.encours}</p>                        </div>
                   <div data-aos="fade-up" className='boxes2 p-2  p-'><p className="text-monospace text-center" style={titre}><HighlightOffIcon />Projets   {projetFini[1]?.nom} </p>
                   <p className="text-center"  style={styleObj}>{projetFini[1]?.encours}</p> 
                   </div>
    </div>
    </Row>
    )
}


export default Map;
