//update
import React, { useState } from 'react';
import "./Header.css";
import Container from "react-bootstrap/Container";
import { Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import * as MuiIcons from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';

function go() {
  console.log("Enter go mihaja");
}
function Header() {
  let user = JSON.parse(localStorage.getItem('users'));
  console.warn(user)
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div>
      <Navbar bg="red" variant="light">
        <Container>
          <Navbar.Brand href="/admin">
            {""}
            <MuiIcons.Handyman />
          </Navbar.Brand>
          <Navbar.Brand href="login">
            <AccountCircleRoundedIcon />
          </Navbar.Brand>
          <NavDropdown title={user.username} id="nav-dropdown" >
            <NavDropdown.Item eventKey="4.1" onClick={logout}><AccountCircleRoundedIcon />Déconnexion</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
