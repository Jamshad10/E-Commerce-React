import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from '../components/Context';

function Beds() {

    const filterBeds = Products.filter((beds) => beds.item === 'Bed')
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <Row className="justify-content-center">
                {filterBeds.map((beds) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={beds.id}>

                            <Card.Img variant="top" src={beds.image} />

                            <Card.Body>
                                <Card.Title>{beds.title}</Card.Title>
                                <Card.Text>{beds.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{beds.price}</b> </Card.Text>
                                <Button onClick={()=>addToCart(beds)}><BsCartPlusFill /></Button>
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

export default Beds