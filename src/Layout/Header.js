import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import { AiFillShopping } from "react-icons/ai";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><span style={{color:'gold'}}>seno</span ><sapn style={{color:'red'}}>MART</sapn></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink className='nav-link' to="/home">Home</NavLink>
            <NavLink className='nav-link' to="/">Logout{" "}</NavLink>
            <NavLink className='nav-link' to="/user">User</NavLink>
          </Nav>
          <NavLink className='nav-link cart' to="/cart" ><AiFillShopping/></NavLink>
         
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header