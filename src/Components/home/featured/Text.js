import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../Resources/images/facup.png'

class Text extends Component {

    animateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate:0,
            }}
            enter={{
                opacity:[1],
                rotate:[360],
                timing:{duration:1000, ease:easePolyOut}
            }}

        
        >
            {({opacity, rotate, })=> {
                return (
                    <div className="featured_number"
                         style={{
                             fontWeight:900, 
                             opacity, 
                             rotate, 
                             transform:'translate(280px,110px) rotateY('+rotate+'deg)'
                            }}
                    > 3
                    </div>
                )
            }}
        </Animate>
    )

    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:600,
                y:450,
            }}
            enter={{
                opacity:[1],
                x:[283],
                y:[450],
                timing:{duration:500, ease:easePolyOut}
            }}

        
        >
            {({opacity, x, y})=> {
                return (
                    <div className="featured_first"
                         style={{
                             opacity, 
                             transform:'translate('+x+'px,'+y+'px)'
                            }}
                    > F.A. Cup
                    </div>
                )
            }}
        </Animate>
    )

    animateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:600,
                y:580,
            }}
            enter={{
                opacity:[1],
                x:[283],
                y:[580],
                timing:{delay:300, duration:500, ease:easePolyOut}
            }}

        
        >
            {({opacity, x, y})=> {
                return (
                    <div className="featured_first"
                         style={{
                             opacity, 
                             transform:'translate('+x+'px,'+y+'px)'
                            }}
                    > Trophies
                    </div>
                )
            }}
        </Animate>
    )

    animateImage = () => (
        <Animate
            show={true}
            start={{
                opacity:0,

            }}
            enter={{
                opacity:[1],

                timing:{delay:800, ease:easePolyOut}
            }}

        
        >
            {({opacity,})=> {
                return (
                    <div className="featured_player"
                         style={{
                             opacity, 
                             background: "url("+FeaturedPlayer+")",
                             transform:'translate(675px,188px)'
                            }}>
                    </div>
                )
            }}
        </Animate>
    )

    render () {
        return (
            <div className="featured_text">
                {this.animateImage()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}

            </div>
        );
    }
} 

export default Text;