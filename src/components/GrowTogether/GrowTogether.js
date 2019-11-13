import React from 'react';
import './GrowTogether.css';
import growTogether from '../../images/illustration-grow-together.svg';


const GrowTogether = (props) => {
    return (
       <>
         <div className="topSvg"></div>
        <section className="growTogether">
           <div className="growTogetherImg">
             <img className="growTogether" src={growTogether} alt="grow"/>
           </div>
           <div className="growTogetherContent">
              <h1>Grow together</h1>
              <p>
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. 
              </p>
           </div>
        </section>
        <div className="bottomSvg"></div>
       </>
    )
}


export default GrowTogether;