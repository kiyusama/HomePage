import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>セクション 1</h5>
            <ul>
              <li>リンク 1</li>
              <li>リンク 2</li>
              <li>リンク 3</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>セクション 2</h5>
            <ul>
              <li>リンク 1</li>
              <li>リンク 2</li>
              <li>リンク 3</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>セクション 3</h5>
            <ul>
              <li>リンク 1</li>
              <li>リンク 2</li>
              <li>リンク 3</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
