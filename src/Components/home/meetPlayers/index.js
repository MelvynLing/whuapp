import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes1.png';
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';


class MeetPlayers extends Component {

     state = {
          show:false
     }

  render() {
    return (
<Reveal
     fraction={0.7}
     onReveal={()=>{
          this.setState({
               show:true
          })
     }}
>
     <div     
          className='home_meetplayers'
          style={{background:`#801638 url(${Stripes})`}}
     >
          <div className='container'>
               <div className='home_meetplayers_wrapper'>
                    <div className="home_card_wrapper">
                         <HomeCards
                              show={this.state.show}
                         />
                    </div>
                    <div className="home_text_wrapper">
                         <div>
                              <Tag bck="#801638" size="100px" color="#ffffff" add={{
                                        display:'inline-block',
                                        marginBottom: '35px',
                                   }}>
                              Com'on
                              </Tag>
                         </div>
                         <div>
                              <Tag bck="#801638" size="100px" color="#ffffff" add={{
                                        display:'inline-block',
                                        marginBottom: '35px',
                                   }}>
                              You
                              </Tag>
                         </div>
                         <div>
                              <Tag bck="#801638" size="100px" color="#ffffff" add={{
                                        display:'inline-block',
                                        marginBottom: '35px',
                                   }}>
                              Irons!
                              </Tag>
                         <div>
                              <Tag
                                   bck="#1bb1e7" 
                                   size="30px" 
                                   color="#F3D459"
                                   link={true}
                                   linkto="/the_team"
                                   add={{
                                             display:'inline-block',
                                             marginBottom: '40px',
                                             border: '1px solid #801638',
                                             fontWeight: "600px"
                                        }}
                              >
                              See the first team here
                              </Tag>
                         </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</Reveal>
    );
  }
}

export default MeetPlayers;
