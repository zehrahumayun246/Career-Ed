import './App.css';
import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Forms from './Components/Forms'
import Forms2 from './Components/Forms2' 
import Forms3 from './Components/Forms3'
import Hero from './Components/MainPage/Hero'
import RequestPage from './Components/MainPage/RequestPage';
import{ BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { EProfile } from './Components/ExpProfile/EProfile';
import { BuyLinker } from './Components/LinkerBuyPage/BuyLinker';
import { AuthProvider} from "./context/AuthContext"
 function App() {
  return(
<>
       <NavBar/>
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/signuphustler" element={<Forms2/>}/>
    <Route path="/signupexpert" element={<Forms3/>}/>
    <Route path="/signin" element={<Forms/>}/>
    <Route path="/expertprofile" element={<EProfile/>}/>
    <Route path="/linkreq" element={<RequestPage/>}/>
    <Route path="/buylinker" element={<BuyLinker/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App;
