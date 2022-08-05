import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route } from 'react-router-dom';
import ViewStudent from '../pages/ViewStudent';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import Login from '../pages/Login';
import AuthUser from '../pages/AuthUser';

function Menu() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if(token !== undefined) {
      logout();
    }
  }
  return (
    <>
      <Navbar bg="dark" className="mb-4" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/students">Students Crud</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/students">Students</Nav.Link>
              <Nav.Link href="/add-student">Add Student</Nav.Link>
              <Nav.Link role="button" onClick={logoutUser}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/students" element={<ViewStudent />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Menu;