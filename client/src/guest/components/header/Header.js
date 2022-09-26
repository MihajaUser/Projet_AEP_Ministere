import React, { useState } from 'react';
import drapeauMad from "../../assets/imagesClient/drapeauMad.jpg";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import * as MuiIcons from '@mui/icons-material';

function Header() {
  return (
    <div>
      <div>
        <img
          src={drapeauMad}
          alt="drapeauMad.jpg"
          width="10%"
          height="20%"
        />
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
          <Navbar.Brand href="/adduction3d">
            {" "}
            <MuiIcons.ViewInAr />
          </Navbar.Brand>
          <Navbar.Brand href="citerne2d">
            {" "}
            <MuiIcons.Camera />
          </Navbar.Brand>
          <Navbar.Brand href="/admin">
            {" "}
            <MuiIcons.Handyman />
          </Navbar.Brand>
          <Navbar.Brand href="#money">
            {" "}
            <MuiIcons.Paid />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
