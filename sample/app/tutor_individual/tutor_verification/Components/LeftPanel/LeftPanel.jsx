import React from 'react';
import "./styles/LeftPanel.css";
import backArrow from '../../../GlobalComponents/Assets/Images/back-arrow.svg';
import rabloLogo from '../../../GlobalComponents/Assets/Images/rablo-logo.png';
import logoutLogo from '../../../GlobalComponents/Assets/Images/logout-logo.svg';

import Image from 'next/image';

const LeftPanel = () => {
  return (
    <div className='left-panel'>
        <div className='logo-container'>
            <Image className='back-arrow' alt='back' src={backArrow}/>
            <Image className='rablo-logo' alt='rablo' src={rabloLogo}/>
        </div>
        <div className='logout-button'>
        <Image className='logout-logo' alt='logout' src={logoutLogo}/>
        <span className='logo-content'>Logout</span>
        </div>
    </div>
  )
}

export default LeftPanel