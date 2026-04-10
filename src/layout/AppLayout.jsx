import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <div>
      <Navbar
        // className='bg-black text-white'
        // bg="dark"
        // data-bs-theme="dark"
        expand="lg"
        className="bg-black"
      >
        <Container  fluid>
          <Navbar.Brand href="#">
            <img
              src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
              width={100}
              height={50}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={'/'} style={{color:'white'}} href="#action1">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/movies'} style={{color:'white'}} href="#action2">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                bg="dark"
                data-bs-theme="dark"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
