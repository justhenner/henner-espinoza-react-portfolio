import React from 'react';
import Project from '../Project';
const projects = [

{
  id: 1,
  name: 'YogaRx',
  description: 'Full Stack',
  deployedLink: 'http://yoga-rx.herokuapp.com',
  repoLink: 'https://github.com/justhenner/yoga-RX',
  image: require('../../assets/yogaRxSnippet.png'),
},
{
  id: 2,
  name: 'Reading is Fun',
  description: 'Front End',
  deployedLink: 'https://justhenner.github.io/reading-is-fun/',
  repoLink: 'https://github.com/justhenner/reading-is-fun',
  image: require('../../assets/readingIsFunSnippet.png'),
},
{
  id: 3,
  name: 'Hobbiest Place on Earth',
  description: "Full Stack",
  deployedLink: 'https://hobbiest-place-ons-earth.herokuapp.com/',
  repoLink: 'https://github.com/j-pohahau5/Hobbist-Place-on-Earth',
  image: require('../../assets/hobbiestSnippet.png'),
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