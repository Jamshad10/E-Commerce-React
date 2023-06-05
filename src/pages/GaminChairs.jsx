import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from '../components/Context';

function GaminChairs() {

    const filterChairs = Products.filter((chairs) => chairs.item === 'Gaming Chair');
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <Row className="justify-content-center">
                {filterChairs.map((chairs) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={chairs.id}>

                            <Card.Img variant="top" src={chairs.image} />

                            <Card.Body>
                                <Card.Title>{chairs.title}</Card.Title>
                                <Card.Text>{chairs.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{chairs.price}</b> </Card.Text>
                                <Button onClick={()=>addToCart(chairs)} ><BsCartPlusFill /></Button>
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

export default GaminChairs