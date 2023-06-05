import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { GiSofa } from "react-icons/gi";
import { CartContext } from '../components/Context';

function Furniture() {
 
  const {addToCart} = useContext(CartContext);
  const filterFurniture = Products.filter((furn)=>furn.model==='furniture');

  return (
    <div>
      <h2 style={{
        textAlign: "center",
        marginTop: '20px',
        marginBottom: '20px',
        color: 'white',
        fontFamily:'cursive',
        borderBottom: '2px solid white'
      }}>
        
       <GiSofa/> Furnitures
      </h2>
            <Row className="justify-content-center">
                {filterFurniture.map((furn) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={furn.id}>

                            <Card.Img variant="top" src={furn.image} />

                            <Card.Body>
                                <Card.Title>{furn.title}</Card.Title>
                                <Card.Text>{furn.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{furn.price}</b> </Card.Text>
                                <Button onClick={() => addToCart(furn)} ><BsCartPlusFill /></Button>
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

export default Furniture;