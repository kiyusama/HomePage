import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import topImg from '../assets/images/top.png';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark" fixed="top"> {/*expandを設定しないとハンバーガーにならないので注意*/}
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={topImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}My Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/history" className="nav-link">History</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;