import React, { useState } from 'react';
import drapeauMad from "../../assets/imagesClient/drapeauMad.jpg";
import logoMinistere from "../../assets/imagesClient/logoMinistere.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import { Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import * as MuiIcons from '@mui/icons-material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import IconRoute from '@mui/icons-material/Route';


function Header() {
  return (
    <div>
      <div className='img'>
        <div ><img src={drapeauMad} alt="drapeauMad.jpg" className='drapeau' /></div>
        <div ><img src={logoMinistere} alt="logoMinistere.png" className='logoMin' /></div>
      </div>
      <Navbar bg="light" variant="light">
        <Container>
          <TextField
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Navbar.Brand href="/">
            {" "}
            <MuiIcons.FmdGood />
          </Navbar.Brand>
          <Navbar.Brand href="/canalisation">
            {" "}
            <MuiIcons.Route />
          </Navbar.Brand>
          <Navbar.Brand href="/ajoutCanalisation1">
            {" "}
            <MuiIcons.AddCircle />
          </Navbar.Brand>
          <Navbar.Brand href="/pump3d">
            {" "}
            <MuiIcons.ViewInAr />
          </Navbar.Brand>
          <Navbar.Brand href="/todoList">
            {" "}
            <MuiIcons.AddTask />
          </Navbar.Brand>
          <Navbar.Brand href="/tableauStat">
            {" "}
            <MuiIcons.Leaderboard />
          </Navbar.Brand>
          <Navbar.Brand href="/admin">
            {" "}
            <MuiIcons.Handyman />
          </Navbar.Brand>
          {/* <ListAltRoundedIcon /><NavDropdown title="" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1"><BloodtypeIcon />Adduction</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1"><IconRoute />canalisation</NavDropdown.Item>
          </NavDropdown> */}
          <Navbar.Brand href="/listeProjet">
            {" "}
            <ListAltRoundedIcon />
            <NavDropdown title="" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1"><BloodtypeIcon />Adduction</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1"><IconRoute />canalisation</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Navbar.Brand href="/login">
            {" "}
            <AccountCircleRoundedIcon />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
