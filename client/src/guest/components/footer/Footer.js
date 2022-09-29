import "./Footer.css";
import React, { useState } from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import logoMinistere from '../../assets/imagesClient/logoMinistere.png';
function Footer() {
  return (
    <div className="footer">
       <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src={logoMinistere} alt="logoMinistere.png"
                width="30px"
              />
              <span className="ml-3 h5 font-weight-bold">Ministère de l'eau</span>
            </a>
          </CDBBox>
          <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
               Siège du Ministère
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBBox>Ex-Immeuble DAIEC,Rue Tsiombikibo,Ambohijatovo Ambony</CDBBox>
                <CDBBox >BP 322
                Antananarivo 101</CDBBox>
               
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Contact
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">www.primature.gov.mg</CDBFooterLink>
                <CDBFooterLink href="/">Ministere-eau@gmail.com</CDBFooterLink>
                <CDBBox>+261 34 79 308 80</CDBBox>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">&copy; Ministère de l'eau, 2022.</small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    </div>
  );
}

export default Footer;
