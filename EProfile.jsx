import React from 'react'
import img from '../ExpProfile/1.png';
export const EProfile = () => {
  return (
    <div className="container exp-profile">
        <form method="">
            <div className='row'>
<div className='col-md-4'>
    <img src={img} alt ="DP"/> 
    <h1>Engineer</h1>
</div>
<div className='col-6-md'>
    <div className='profile-head'>
        <h5>Name: </h5>
        <h6>Field: </h6>
        <p className='profile-rating mt-3 mb-5'>RANKING: <span>*/10 </span></p>

    </div>
</div>
<div className='col-md-2'>
<a href ="#" className="btn btn-outline-success">0 Linkers</a>
</div>
            </div>
           
        <div className='comments'>
                <h1 className='revs'>Reviews:</h1>
            </div>
        </form>
    </div>
  )
}
