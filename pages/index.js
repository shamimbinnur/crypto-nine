import React, { useEffect, useState } from 'react'

import LeftPart from '../components/dashboard/left/LeftPart'
import RightPart from '../components/dashboard/right/RightPart'
import MiddlePart from '../components/dashboard/middle/MiddlePart'
import ToggleMenu from '../components/dashboard/right/ToggleMenu';

export default function Home() {

  const [darkMode, setdarkMode] = useState('');
  
  const toggle = ()=> {
      darkMode == '' ? setdarkMode('dark') : setdarkMode('');
      console.log(showMenu)
  }
  const [showMenu, setShowMenu] = useState('hidden')
  
  const toggleMenu = () => {
      showMenu == 'hidden' ? setShowMenu('block') : setShowMenu('hidden') 
      
  }
  useEffect(() => {

    
  
  }, [])
  


  return (
    <div  className={ 'flex font-poppins flex-col-reverse md:flex-row ' + darkMode }>
        <ToggleMenu toggleMenu={toggleMenu} showMenu={showMenu}  />
        <LeftPart />
        <MiddlePart />
        <RightPart toggleMenu={toggleMenu} showMenu={showMenu} toggle={toggle}  darkMode={darkMode}/>
      </div>
  )
}
