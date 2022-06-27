import React from 'react';
import Banner from '../assets/portfolioBanner.png'

function Header (props){

    return (

<header className='flex-row space-between px-1'>

<img src= {Banner} alt= 'banner' height="300" width="100%"></img>



</header>

);

}

export default Header;