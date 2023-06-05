import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from '../components/Context';

function Fan() {

    const filterFan = Products.filter((fan) => fan.item === 'Fan');
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <Row className="justify-content-center">
                {filterFan.map((fan) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={fan.id}>

                            <Card.Img variant="top" src={fan.image} />

                            <Card.Body>
                                <Card.Title>{fan.title}</Card.Title>
                                <Card.Text>{fan.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{fan.price}</b> </Card.Text>
                                <Button onClick={()=>addToCart(fan)}><BsCartPlusFill /></Button>
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

export default Fan