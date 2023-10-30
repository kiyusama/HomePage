import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='vh-100 d-flex align-items-center'>
    <Row>
      <Col lg={7} className='mx-auto'>
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quod delectus nostrum, hic dolorum iusto inventore ullam aut similique qui perferendis minima! Porro, ad? Natus, omnis? Nemo saepe placeat commodi?</p>
      </Col>
    </Row>
  </Container>
  )
}

export default About