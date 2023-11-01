import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import img1 from '../assets/images/idle2p_2.png'
import './History.css'


const History = () => {
    useEffect(() => {
      ScrollReveal().reveal('.imgRight', {
        duration: 1600,
        distance: '50%',
        origin: 'right',
        reset: true
      });

      ScrollReveal().reveal('.imgLeft', {
        duration: 1600,
        distance: '50%',
        origin: 'left',
        reset: true
      });
    }, []);

  return (
    <div className='overflow-hidden'>
        <div className='back'>
        <div className='bg-imgHis'></div>
            <Container className='vh-100 d-flex align-items-center'>
                <Row>
                <Col lg={7} className='mx-auto'>
                    <h1>History</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quod delectus nostrum, hic dolorum iusto inventore ullam aut similique qui perferendis minima! Porro, ad? Natus, omnis? Nemo saepe placeat commodi?</p>
                </Col>
                </Row>
            </Container>
        </div>

            <div className='back'>
            <div className='bg-imgHis'></div>
            <Container className='vh-100 d-flex align-items-center imgRight'>
                <Row>
                <Col lg={7} className='mx-auto'>
                    <h1>History</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quod delectus nostrum, hic dolorum iusto inventore ullam aut similique qui perferendis minima! Porro, ad? Natus, omnis? Nemo saepe placeat commodi?</p>
                </Col>
                </Row>
            </Container>
            </div>


            <div className='back'>
            <div className='bg-imgHis'></div>
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <h2 className='imgRight mx-auto'>
                            asddgfgf
                        </h2>
                    </Col>
                    <Col md={6}>
                        <img src={img1} className='imgRight img-fluid' alt="" />
                    </Col>
                </Row>
            </Container>
            </div>



            <Container className="d-flex justify-content-center">
                <Row>
                    <Col md={6}>
                        <img src={img1} className='imgLeft img-fluid' alt="" />
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <h2 className='imgLeft mx-auto'>
                            asddgfgf
                        </h2>
                    </Col>
                </Row>
            </Container>
        
    </div>
  )
}

export default History