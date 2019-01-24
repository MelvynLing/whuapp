import React, { Component } from 'react';
// import { WestHamLogo } from '../ui/icons';
import { WestHamOld } from '../ui/icons';

const Footer = () => {
  return (
    <footer className="bck_blue">
        <div className="footer_logo">
          <WestHamOld
              width="120px"
              height="115px"
              link={true}
              linkTo="/"
              
          />
        </div>
        <div className="footer_cr" style={{margin:'25px 0'}}>
        Melvyn Ling &copy; 2019 All Rights Reservers
        </div>      
    </footer>
  )
}

export default Footer;
