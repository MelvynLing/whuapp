import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import { WestHamLogo } from '../ui/icons';

class Header extends Component {
  render() {
    return (
        <AppBar
            postion="fixed"
            style={{
                backgroundColor: '#1bb1e7',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '7px solid #F3D459',
            }}
        >
            <Toolbar style={{display:'flex'}}>
                <div style={{flexGrow:1}}>
                    <div className="header_logo">
                        <WestHamLogo
                            link={true}
                            linkTo="/"
                            width="54px"
                            height="60px"
                        /> 
                    </div>
                </div>
                <Link to="/the_team">
                    <Button color="inherit">The Team</Button>
                </Link>
                <Link to="/the_matches">
                    <Button color="inherit">Schedule</Button>
                </Link>

            </Toolbar>


        
        </AppBar>
    );
  }
}


export default Header;

