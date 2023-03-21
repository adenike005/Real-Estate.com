import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
       <div className='content'>
        <h1>Find the perfect place</h1>
        <p className='search-text'>Search the largest selection of luxury igh-rise apartments, multi family home, and luxury home</p>
        <form className='search'>
           <div>
            <input type='text' placeholder='Enter keyword..'/>
           </div>
           <div className='radio'>
            <input type='radio' checked/>
            <label>Buy</label>
            <input type='radio' checked/>
            <label>Rent</label>
            <button type="submit"><AiOutlineSearch className="icon"/></button>
           </div>
        </form>
       </div>
    </div>
  )
}

export default Hero