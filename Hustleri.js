import React from 'react'
import Forms2 from "./Forms2";
const Hustleri = () => {
  return (
      <div className="hustleri">
        <div className="container">
          <div className="row">
            <div className="col-6 p-25">
          <h3>About Hustlers</h3>
          <h1>We're all hustlers in this race of life right?
          </h1>
          <p>
            The websites refers to the students seeking counseling for school, college, university, 
            work and any other field of life as hustlers. So, if you are any of these, click below to
            register yourself and explore the world beforehand.
          </p>
          <p2>
            With Career-Ed, you can look out for opportunities for yourself aswell. 
            If you are finding a job and have great skills in any field all you have to do is create your 
            hustler account, add your skills and make yourself available to hirers who are looking for talented people
            just like you and the rest is upto us. Click on the button below or go to the Hustler view from the Navbar to 
            register yourself today.

          </p2>
          
          <div className="col-6">
         <button onClick={'/signup'} type="button" class="btn btn-primary btn-lg">Sign Up</button>
            <div className="hustleri__img">
              
              <img src="/img/Hhustleri.jpg" alt="girl"></img>
              </div>
              
            </div>
          </div>
          </div>
          </div>
        </div>
  )
}
export default Hustleri