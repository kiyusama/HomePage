import React from 'react'
import { Card, Container, Row ,Col } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
        <div className='backHome d-flex align-items-center'> 
          <Container>
            <Row>
              <Col lg={7} className='mx-auto'>
                  <h1>Home</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quod delectus nostrum, hic dolorum iusto inventore ullam aut similique qui perferendis minima! Porro, ad? Natus, omnis? Nemo saepe placeat commodi?</p>
              </Col>
            </Row>
          </Container>
        </div>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home
