import React, { useState }  from 'react';
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import * as MuiIcons from '@mui/icons-material';

function go() {
  console.log("Enter go mihaja");
}
function Header() {
  return (
    <div>
      <Navbar bg="red" variant="light">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <MuiIcons.FmdGood />
          </Navbar.Brand>
          <Navbar.Brand href="/adduction3d">
            {" "}
            <MuiIcons.ViewInAr />
          </Navbar.Brand>
          <Navbar.Brand href="#screen">
            {" "}
            <MuiIcons.Camera />
          </Navbar.Brand>
          <Navbar.Brand href="/admin">
            {" "}
            <MuiIcons.Handyman />
          </Navbar.Brand>
         <Navbar.Brand href="listeProjet">
            {" "}
            <ListAltRoundedIcon />
          </Navbar.Brand>
           <Navbar.Brand href="login">
            {" "}
            <AccountCircleRoundedIcon />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
