import React, { PureComponent } from 'react'
import { Table } from 'react-bootstrap';
import Card from './Cards';
import "./Hero.css"
class Cards2 extends PureComponent {
  render() 
  {
    return (
       <>
         <h1 className='Head1'>Experts Suggested For You</h1>
         <Table className='table'>
      <div className="container-fluid d-flex justify-content-center">
         
          <tr className='row'>
              <div className='col-md-2'>
                  <Card/>
              </div>
         
          <div className='col-md-2'>
                  <Card/>
              </div>
              <div className='col-md-2'>
                  <Card/>
                  </div>
                  <div className='col-md-2'>
                  <Card/>
                  </div>
                  <div className='col-md-2'>
                  <Card/>
                  </div>
                  <div className='col-md-2'>
                  <Card/>
                  </div>
              </tr>
              
      </div>
      </Table>
      <h1>Could Not Find Your Desired Expert?</h1>
      <p>Our suggestion options are designed to get you the most suitable experts according to your profile but you can always  go up to the search bar to find the desired one

      </p>
      <p>
        Please Fill The FeedBack Form And Help Us Improve Ourselves 
      </p>
      </>
    )
  }
}
export default Cards2;
