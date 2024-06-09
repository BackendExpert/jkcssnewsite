import React from 'react'
import '../../styles/index.css'
import '@jehankandy/jkcss/src/jkcss.css'
import JKCSS from '../../assets/jkcss.png'
import { Link } from 'react-router-dom'
import { BsLinkedin } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className='container navbar'>
        <div className="flex justify-between">
            <div className="flex">
                <Link to={'/'}>
                    <img src={JKCSS} alt="" className='logo'/>
                </Link>
                <h1 className="font-semibold">JKCSS</h1>
            </div>
            <div className="" style={{ paddingTop: '6px' }}>
                <BsLinkedin style={{ height: '30px', width: 'auto'}} />
            </div>
        
        </div>
        
    </div>
  )
}

export default NavBar