import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import img1 from '../assets/images/idle2p_2.png'


const History = () => {
    useEffect(() => {
      ScrollReveal().reveal('.imgRight', {
        duration: 1600,
        distance: '100%',
        origin: 'right',
        reset: true
      });
    }, []);

  return (
    <div>
        <Container className='vh-100 d-flex align-items-center'>
            <Row>
            <Col lg={7} className='mx-auto'>
                <h1>History</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quod delectus nostrum, hic dolorum iusto inventore ullam aut similique qui perferendis minima! Porro, ad? Natus, omnis? Nemo saepe placeat commodi?</p>
            </Col>
            </Row>
        </Container>


        <Container className='vh-100 d-flex align-items-center imgRight'>
            <Row>
            <Col lg={7} className='mx-auto'>
                <h1>History</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quod delectus nostrum, hic dolorum iusto inventore ullam aut similique qui perferendis minima! Porro, ad? Natus, omnis? Nemo saepe placeat commodi?</p>
            </Col>
            </Row>
        </Container>

        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <img src={img1} className='imgRight position-relative start-100' height="300" width="300" alt="サンプル画像" />
                    <h2 className='imgRight'>
                        asddgfgf
                    </h2>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default History