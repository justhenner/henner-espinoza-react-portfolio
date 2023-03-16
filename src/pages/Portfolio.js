import React from 'react';
import Project from '../components/Project';
const projects = [

{
  id: 1,
  name: 'YogaRx',
  description: 'Full Stack',
  deployedLink: 'hhttp://yoga-rx.herokuapp.com/ttps://bullet-journal.herokuapp.com/',
  repoLink: 'https://github.com/justhenner/yoga-RX',
},
{
  id: 2,
  name: 'Reading is Fun',
  description: 'Front End',
  deployedLink: 'https://justhenner.github.io/reading-is-fun/',
  repoLink: 'https://github.com/justhenner/reading-is-fun',
},
{
  id: 3,
  name: 'Hobbist Place on Earth',
  description: "Full Stack",
  deployedLink: 'https://github.com/j-pohahau5/Hobbist-Place-on-Earth',
  repoLink: 'https://github.com/j-pohahau5/Hobbist-Place-on-Earth',
},

]
function Portfolio() {
return (
  <div className='container'>
      <h2>Portfolio</h2>
      <Project projects={projects} />
  </div>
)
}

export default Portfolio;


// export default function Portfolio() {
//   return (
//     <div>
//       <h1>Portfolio</h1>
//       <p>
//         Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
//         Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
//         mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
//         lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
//         in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
//       </p>
//     </div>
//   );
// }
