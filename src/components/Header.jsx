import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import top_img from '../assets/top.png';



const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg"> {/*expandを設定しないとハンバーガーにならないので注意*/}
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={top_img}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}My Page
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
      </Container>
    </Navbar>
  );
}

export default Header;