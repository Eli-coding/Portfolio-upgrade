
import * as React from 'react';
import profilehtml from '../assets/profilehtml.jpg';
//import { Typography } from '@mui/material';

export default function About() {
  return (
   
<div>
<p>ABOUT ME</p>
<div>
      <img src={profilehtml} alt="me" height="350" width="300"/>
    </div>



    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla risus, dignissim cursus ante vehicula,  <br/>
        tincidunt ultrices enim. Duis ultricies justo arcu, et finibus nunc sodales mollis. <br/>
        Phasellus ut vestibulum quam. Nam elementum commodo urna vel cursus. Mauris faucibus  <br/>
        Vivamus faucibus bibendum neque sit amet venenatis. </p>


</div>
   
  );
}
