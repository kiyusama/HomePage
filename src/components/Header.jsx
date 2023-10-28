import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import top_img from '../assets/top.png';



const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={top_img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}ポートフォリオ
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">ホーム</Nav.Link>
            <Nav.Link href="#">ブログ</Nav.Link>
            <Nav.Link href="#">SNS</Nav.Link>
            <span className="nav-link bi bi-alarm mr-2"></span>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;