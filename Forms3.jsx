import React from 'react'
import { useRef } from 'react';
import {Form,Button,Card,Container} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
 function Forms3(){
  const emailRef = useRef();
  const usernameRef = useRef();
  const linkersRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const fieldRef = useRef();
  const{signup}=useAuth();
  return(
    <>
 <Container className='d-flex align items-center justify-content-center'>
 <div className='w-100' style={{maxWidth:"400px"}}>
  <Card>
   <Card.Body>
     <h2>Expert Sign Up</h2>
    <Form>
      <Form.Group id ="username">
         <Form.Label>Username</Form.Label> 
         <Form.Control type="username" ref ={usernameRef} required/>
      </Form.Group>

      <Form.Group id ="firstname">
         <Form.Label>Firstname</Form.Label> 
         <Form.Control type="firstname" ref ={firstnameRef} required/>
      </Form.Group>

      <Form.Group id ="lastname">
         <Form.Label>Lastname</Form.Label> 
         <Form.Control type="lastname" ref ={lastnameRef} required/>
      </Form.Group>

      <Form.Group id ="field">
         <Form.Label>Field</Form.Label> 
         <Form.Control type="field" ref ={fieldRef} required/>
      </Form.Group>

      <Form.Group id ="linkers">
         <Form.Label>Linkers</Form.Label> 
         <Form.Control type="linkers" ref ={linkersRef} required/>
      </Form.Group>

      <Form.Group id ="password">
         <Form.Label>Password</Form.Label> 
         <Form.Control type="password" ref ={passwordRef} required/>
      </Form.Group>
      
      <Form.Group id ="email">
         <Form.Label>email</Form.Label> 
         <Form.Control type="email" ref ={emailRef} required/>
      </Form.Group>

      <Button className='w-qoo' type="submit">
        Sign Up
      </Button>
    </Form>
     </Card.Body>
    </Card>
    </div>
    </Container>
    </>
  )
}
export default Forms3;