//THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
import * as React from 'react';
import { Typography } from '@mui/material';
export default function About() {
    return (
     
  <div className='container'>

  <div>
  <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:50a64d30-a22b-3eac-b1a1-a8693387044d"> Download My Resume</a>
      </div>
  
  <Typography>
  <h2>Front-end Proficiencies</h2>
        <dl className="skills">
          <dd>HTML</dd>
          <dd>CSS</dd>
          <dd>JavaScript</dd>
          <dd>jQuery</dd>
          <dd>responsive design</dd>
          <dd>React</dd>
          <dd>Bootstrap</dd>
        </dl>
        <h2>Back-end Proficiencies</h2>
        <dl className="skills">
          <dd>APIs</dd>
          <dd>Node</dd>
          <dd>Express</dd>
          <dd>MySQL, Sequelize</dd>
          <dd>MongoDB, Mongoose</dd>
          <dd>REST</dd>
          <dd>GraphQL</dd>
        </dl>
      

   
  </Typography>
  
  </div>
     
    );
  }
  