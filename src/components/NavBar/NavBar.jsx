import React from 'react'
import '../../styles/index.css'
import '@jehankandy/jkcss/src/jkcss.css'
import JKCSS from '../../assets/jkcss.png'

const NavBar = () => {
  return (
    <div className='container navbar'>
        <div className="">
            <img src={JKCSS} alt="" className='logo'/>
        </div>
        <h1 className="font-semibold">JKCSS</h1>
    </div>
  )
}

export default NavBar