import React from 'react';
import headshot from '../assets/hee_creative_headshot.jpg';

export default function About() {
  return (
    <div>
          <h2 >About Me</h2> 
           <div className="container-fluid" >
           <div className='row'>
                <div className='col-lg-6 '>
                    <img style={{ border: 'solid black 2px', width: '30rem', height: '30rem' }} src={headshot} alt='headshot' />
                </div>
            <div className='col-lg-6 '>
                <p className='pl-5'>Hi! I'm Henner. Nowadays, you can generally find me behind a monitor learning to code, or on a yoga mat twisting. My skill set is varied. I studied business and marketing during undergrad, worked on Wall Street in my early 20's, became a yoga instructor during my Saturn return, and obtained a Masters Degree in Contemporary history while studying abroad in Madrid during the COVID pandemic.
                <br></br>
                <br></br>
                Currently, I'm a freelance marketing specialist for a fintech startup and teach both HIIT and hot yoga at my local gym. As a life long seeker of knowledge and skills in three months I took on the herculean task of learning front-end and back-end technologies as a member Berkeley's Full Stack Coding Bootcamp Dec 22' cohort. </p>
            </div>
        </div>  
        </div>
        </div >
    
    
    // <div>
    //   <h1>Henner Espinoza</h1>
    //   <p>
    //    Hi! I'm Henner. Nowadays, you can generally find me behind a monitor coding, or on a yoga mat twisting. My skill set is varied. I studied business and marketing during undergrad, worked on Wall Street in my early 20's, became a yoga instructor during my Saturn return, and obtained a Masters Degree in Contemporary history at 30 while studying abroad in Madrid.
    //    Currently, I'm a freelance marketing specialist for a fintech startup and HIIT/Hot yoga instructor at my local gym. As if I wasn't busy enough in three months I took on the herculean task of learning front-end and back-end technologies. 
    //   </p>
    // </div>
  );
}
