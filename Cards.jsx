import React from 'react';
import img from '../MainPage/1.png';
import "./Hero.css"
const Cards =props=>
{
return(
    <div className='card text-centre'>
        <div className='overflow'>
            <img src={img} alt='img'className='card-img-top'/>

        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>Expert</h4>
            <p className='card-text text-secondary'>Name:</p>
            <p className='card-text text-secondary'>Field:</p>
            <p className='card-text text-secondary'>Avail. Status:</p>
        <a href ="#" className="btn btn-outline-success">0 Linkers</a>
        </div>
    </div>
)
}
export default Cards;