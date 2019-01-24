import React from 'react';
import { Link } from 'react-router-dom';

import Whulogo from '../../Resources/images/logos/whuLogo.png'
import WhuOld from '../../Resources/images/logos/whuOld.png'




export const WestHamLogo = (props) => {
    
    const template = <div
                        className="img_cover"
                        style={{
                            width: props.width,
                            height: props.height,
                            background: 'url(' + Whulogo + ') no-repeat'
                        }}></div>

    if (props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }
}


export const WestHamOld = (props) => {
    
    const template = <div
                        className="img_cover"
                        style={{
                            width: props.width,
                            height: props.height,
                            background: 'url(' + WhuOld + ') no-repeat'
                        }}></div>

    if (props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }
}