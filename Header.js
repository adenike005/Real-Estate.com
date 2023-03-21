import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'




import './Header.css'
const Header = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='navbar'>
       <div className='container'>
        <h1><span><BsFillHouseFill/>Real Estate</span></h1>
        <button className='btn'>sign in</button>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Search</a></li>
            <li><a href='#'>contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaRegTimesCircle className='icon'/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
           
        </div>
       </div>
    </div>
  )
}

export default Header