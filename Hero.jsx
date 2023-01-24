import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import './Hero.css';
import Cards2 from "./Cards2"
import Feedback from '../Feedback';
const Hero =()=>{
    return(
        <div className='hero'>
            <div className='content'>
<h1>The Expert You Were Looking For</h1>
<p className='Search-text'>Search For The Field You Need Help In Or Name Of The Expert You Are Looking For</p>
<form className='search'>
    <div>
        <input type ='text' placeholder='Enter Keyword..'/>
    </div>
    <button type= 'submit'><AiOutlineSearch className='icon'/></button>
</form>

        </div>
        <Cards2/>
        <Feedback/>
        </div>
        
        
    )
}
export default Hero;