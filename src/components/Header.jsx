import React, { useState } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import topImg from '../assets/images/top.png';
import { Link } from 'react-router-dom';



const Header = () => {

  const [expanded, setExpanded] = useState(false);

  const scrollTop = () => {
    window.scroll(0, 0);
  }

  return (
    <Navbar className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={scrollTop}>
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
            
            <Link to="/about" className="nav-link" onClick={() => {setExpanded(false); scrollTop();}}>About</Link>
            <Link to="/history" className="nav-link" onClick={() => {setExpanded(false); scrollTop();}}>History</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;