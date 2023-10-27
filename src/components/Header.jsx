import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="#">ポートフォリオ</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#">ホーム</Nav.Link>
        <Nav.Link href="#">ブログ</Nav.Link>
        <Nav.Link href="#">SNS</Nav.Link>

        <Button className="bi bi-alarm"></Button>
        
      </Nav>
    </Navbar>
  );
}

export default Header