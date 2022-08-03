import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu()
{
  return(
<Navbar bg="dark" className="mb-2" variant="dark" expand="lg">
<Container>
  <Navbar.Brand href="/students">Students Crud</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/students">Students</Nav.Link>
      <Nav.Link href="/add-student">Add Student</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}

export default Menu;