import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
          <MDBNavbarBrand>Navbar</MDBNavbarBrand>
          <span>All Products</span>
          <MDBBtn color="dark">Cart(0)</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
