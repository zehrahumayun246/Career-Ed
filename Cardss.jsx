import React from 'react';
import img from '../MainPage/1.png';
import "./Hero.css"
const Cardss =props=>
{
return(
    <div className='card text-centre'>
        <div className='overflow'>
            <img src={img} alt='img'className='card-img-top'/>

        </div>
        <div className='card-body text-dark'>
            <p className='card-text text-secondary'>Name:</p>
            <p className='card-text text-secondary'>Time Request:</p>
            <p className='card-text text-secondary'>Issue:</p>
        <a href ="#" className="btn btn-outline-success">Link Up</a>
        </div>
    </div>
)
}
export default Cardss;