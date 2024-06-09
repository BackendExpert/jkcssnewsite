import React from 'react'
import '../../styles/index.css'
import '@jehankandy/jkcss/src/jkcss.css'
import JKCSS from '../../assets/jkcss.png'

const NavBar = () => {
  return (
    <div className='container navbar'>
        <div className="flex justify-between">
            <div className="flex">
                <img src={JKCSS} alt="" className='logo'/>
                <h1 className="font-semibold mx-2">JKCSS</h1>
            </div>
        
        </div>
        
    </div>
  )
}

export default NavBar