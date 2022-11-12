
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login({ setUser, setErrors, errors }) {
    const [loginCredentials, setLoginCredentials] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const stateCopy = {...loginCredentials}
        stateCopy[e.target.name] = e.target.value
        setLoginCredentials(stateCopy)
    }

    const handleLoginClick = () => {
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(loginCredentials)
        }
        fetch("/login", config)
            .then(resp => {
                setLoginCredentials({
                    username: '',
                    password: ''
                })
                if (resp.ok){
                    return resp.json().then(user => {
                        navigate("/")
                        setUser(user)
                    })
                } else {
                    resp.json().then(({ errors }) => setErrors(errors))
                }
            })
            
    }

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    
          <MDBInput wrapperClass='mb-4' label='Enter username' id='form1' type='username' name="username" value={loginCredentials.username} onChange={handleInputChange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name="password" value={loginCredentials.password} onChange={handleInputChange}/>
    
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
    
          <MDBBtn className="mb-4" onClick={handleLoginClick}>Sign in</MDBBtn>
    
          <div className="text-center">
            <p>Not a member? <a href="/signup">Register</a></p>
            <p>or sign up with:</p>
    
            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
    
            </div>
          </div>
            {errors.map(err => {
                return <div style={{color: "red"}}>{err}</div>
            })}
        </MDBContainer>
      );
}
export default Login