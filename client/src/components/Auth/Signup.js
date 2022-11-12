import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Signup({setUser}) {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const navigate = useNavigate()

    // Update the userData object
    const handleInputChange = (e) => {
        const stateCopy = {...userData}
        stateCopy[e.target.name] = e.target.value
        setUserData(stateCopy)
    }

    const handleFormSubmit = () => {
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(userData)
        }

        fetch("/signup", config)
            .then(resp => resp.json())
            .then(user => {
                navigate("/")
                setUser(user)
            })
            .catch(err => console.log(err))
    }


    return (
        <MDBContainer fluid>
            {/* <form onSubmit={handleFormSubmit}>
                <input type="text" value="fake data" />
                <input type='submit'></input>
            </form> */}
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Username' id='form1' type='text' value={userData.username} name="username" className='w-100' onChange={handleInputChange}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email' value={userData.email} name="email" onChange={handleInputChange}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password' value={userData.password} name="password" onChange={handleInputChange}/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput label='Repeat your password' id='form4' type='password' value={userData.password_confirmation} name="password_confirmation" onChange={handleInputChange}/>
                  </div>
    
                  <MDBBtn className='mb-4' size='lg' onClick={handleFormSubmit}>Register</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
}
export default Signup