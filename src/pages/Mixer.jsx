import { React, useContext } from 'react';
import { Products } from './Products';
import Footer from './Footer';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from '../components/Context';

function Mixer() {

    const filterMixer = Products.filter((mixer) => mixer.item === 'Mixer');
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <Row className="justify-content-center">
                {filterMixer.map((mixer) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={mixer.id}>

                            <Card.Img variant="top" src={mixer.image} />

                            <Card.Body>
                                <Card.Title>{mixer.title}</Card.Title>
                                <Card.Text>{mixer.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{mixer.price}</b> </Card.Text>
                                <Button onClick={() => addToCart(mixer)} ><BsCartPlusFill /></Button>
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

export default Mixer