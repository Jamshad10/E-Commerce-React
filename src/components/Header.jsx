import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { MdChair, MdBlender } from 'react-icons/md';
import { User, ShoppingCart, MagnifyingGlass } from "phosphor-react";
import { CartContext } from './Context';


function Header() {

  const {cartItems} = useContext(CartContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark" style={{ height: '80px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://w7.pngwing.com/pngs/875/508/png-transparent-logo-house-real-estate-house-angle-building-text-thumbnail.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand ><h2 style={{ fontFamily: 'cursive' }}>Ware-House</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to='/' style={{ fontFamily: 'cursive' }}><FaHome /> Home</Link>
            <Link className='nav-link' to='/furniture' style={{ fontFamily: 'cursive' }}><MdChair /> Furniture</Link>
            <Link className='nav-link' to='/appliance' style={{ fontFamily: 'cursive' }} ><MdBlender /> Appliances</Link>
            {/* <Link className='nav-link' to='/lights'><MdLight /> Lamps & Lighting</Link> */}
            {/* <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="mx-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search........................"
                className="me-2"
                aria-label="Search"
              />
              <Link><MagnifyingGlass style={{ color: 'white' }} size={32} /></Link>
            </Form>
          </div>
          <Nav>
            <Link className='nav-link' to='/login'><User size={32} /></Link>
            <Link className='nav-link' to='/cart'>
              <ShoppingCart size={32} /> 
              <span style={{
                borderRadius:'50px',
                backgroundColor:'red',
                color:'white',
                padding:'5px'
              }}>{cartItems.length}</span>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
