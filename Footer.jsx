import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="main-footer">
        <div className="containerr">
            <div className="row">
                {/* Column 1 */}
                <div className="col-md-3 col-sm-6">
                <h4>
                  Phone
                </h4>    
                    <ul className="list-unstyles">
                    <li> +92-331-6421090</li>  
                    <li> +92-322-7403410</li>  
                    <li> +92-336-9938368</li>    
                    </ul>
                </div>
                {/* Column 2 */}
                <div className="col-md-3 col-sm-6">
                <h4>
                  Email
                </h4>    
                    <ul className="list-unstyles">
                    <li>CareerEd@gmail.com</li>  
                    <li> 201274@students.au.edu.pk</li>  
                    <li> 201236@students.au.edu.pk</li>  
                    <li> 201248@students.au.edu.pk</li>    
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col-md-3 col-sm-6">
                <h4>
                  Facebook  
                </h4>    
                    <ul className="list-unstyles">
                    <li> Career-Ed</li>  
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col-md-3 col-sm-6">
                <h4>
                  Instagram
                </h4>    
                    <ul className="list-unstyles">
                    <li>Career-Ed</li>    
                    </ul>
                </div>
                </div>
                <div className="footer-bottom">
                <pf className="text-xs-center">
                &copy;{new Date().getFullYear()} Career-Ed All Rights Reserved    
                </pf>    
                </div>
            </div>
        </div>   
    </>
  )
}

export default Footer