import React from 'react';
import './Citerne2d.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as MuiIcons from '@mui/icons-material';
const Navigation = ({ linkValue }) => {
  return (
    <div className='CardContainer2d '>
      <Card className='MyCard2d '>
        <br></br>
        <Link to={`${linkValue}`}>
          <Button className='MyButton2d ' ><MuiIcons.ViewInAr />  3D Vue</Button>
        </Link>
        <br></br>
        <Link to="#">
        <Button className='MyButton2d '  ><MuiIcons.SelectAllTwoTone />   2D Vue</Button>
        </Link>
        <br></br>
        <Link to="/">
          <Button className='MyButton2d '  ><MuiIcons.FmdGood />   CARTE</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Navigation;