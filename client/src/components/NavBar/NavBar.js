import { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

function NavBar( {setUser} ) {
    const [showBasic, setShowBasic] = useState(false)

    const handleLogoutClick = () => {
        const config = {
            method: "DELETE"
        }

        fetch("/logout", config)
            .then(resp => {
                setUser({username: ""})
                console.log(resp)
            })
    }

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
    
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='/'>
                    Home
                  </MDBNavbarLink>
                  <MDBNavbarLink active aria-current='page' href='/login'>
                    Login
                  </MDBNavbarLink>
                {/* </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>
    
                <MDBNavbarItem> */}
                  <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true' onClick={handleLogoutClick}>
                    Logout
                  </MDBNavbarLink>
                  <MDBNavbarLink active aria-current='page' href='/signup'>
                    Sign up
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      );
}
export default NavBar