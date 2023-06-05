import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from '../components/Context';

function Lamb() {

    const filterLamb = Products.filter((lamb) => lamb.item === 'Lamb');
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <Row className="justify-content-center">
                {filterLamb.map((lamb) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={lamb.id}>

                            <Card.Img variant="top" src={lamb.image} />

                            <Card.Body>
                                <Card.Title>{lamb.title}</Card.Title>
                                <Card.Text>{lamb.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{lamb.price}</b> </Card.Text>
                                <Button onClick={() => addToCart(lamb)} ><BsCartPlusFill /></Button>
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

export default Lamb