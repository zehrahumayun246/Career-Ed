import React, { PureComponent } from 'react'
import { Table } from 'react-bootstrap';
import Card from './Cardss';
import "./Hero.css"
class Cardss2 extends PureComponent {
  render() 
  {
    return (
       <>
         <h2 className='Head1'>You have the following pending requests</h2>
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
              </tr>
              
      </div>
      </Table>
      <h1>Not Getting Enough Or Your Field Related Requests?</h1>
      <p>
          Get in touch with our Profile Building Experts To Make Your Profile Stronger
      </p>
      <p>
        Please Fill The FeedBack Form And Help Us Improve Ourselves 
      </p>
      </>
    )
  }
}
export default Cardss2;
