import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
  <div className="row">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Career-Ed</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Home" className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/signupexpert" className="nav-link active" >Expert</Link>
        </li>
        <li className="nav-item">
        <Link to="/signuphustler" className="nav-link active" >Hustler</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default NavBar