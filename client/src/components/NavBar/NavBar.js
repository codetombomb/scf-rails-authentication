import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

function NavBar({ setUser, setLoggedIn, loggedIn }) {
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    const config = {
      method: "DELETE",
    };

    fetch("/logout", config).then((resp) => {
      setUser({ username: "" });
      setLoggedIn(false)
      navigate('/login')
    });
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              {loggedIn ? <Link to="/">Home</Link> : null}
            </MDBNavbarItem>
            <MDBNavbarItem>
              {loggedIn ? null : <Link to="/login">Login</Link>}
            </MDBNavbarItem>
            {/* </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>
                
            <MDBNavbarItem> */}

            <MDBNavbarItem>
              <Link onClick={handleLogoutClick}>Logout</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {loggedIn ? null : <Link to="/signup">Sign up</Link>}
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavBar;
