import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from '../components/Context';
import { MdBlender } from 'react-icons/md';

function Appliances() {

  const { addToCart } = useContext(CartContext);
  const filterAppliance = Products.filter((appl) => appl.model === 'appliance')

  return (
    <div>
      <h2 style={{
        textAlign: "center",
        marginTop: '20px',
        marginBottom: '20px',
        color: 'white',
        fontFamily: 'cursive',
        borderBottom: '2px solid white'
      }}>
        <MdBlender />
        Appliances
      </h2>
      <Row className="justify-content-center">
        {filterAppliance.map((appl) => (
          <Col md={3} className="m-3">
            <Card style={{ width: '18rem' }} key={appl.id}>

              <Card.Img variant="top" src={appl.image} />

              <Card.Body>
                <Card.Title>{appl.title}</Card.Title>
                <Card.Text>{appl.item}</Card.Text>
                <Card.Text><FaRupeeSign /><b>{appl.price}</b> </Card.Text>
                <Button onClick={() => addToCart(appl)} ><BsCartPlusFill /></Button>
                <Button variant='danger' style={{ marginLeft: '10px' }} >Buy</Button>

              </Card.Body>
            </Card>
          </Col>
        )
        )}
      </Row>
      <Footer />
    </div>
  )
}

export default Appliances;