import React from 'react';
import PromtionAnimation from './Animation'
import Enroll from './Enroll';

const Promotion = () => {
     return (
          <div className="promotion_wrapper" style={{background:"#ffffff"}}>
               <div className="container">
                    <PromtionAnimation/>
                    <Enroll/>
               </div>
          </div>
     );
};

export default Promotion;