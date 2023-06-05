import { React, useContext } from 'react';
import { Products } from './Products';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaRupeeSign } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs"
import Footer from './Footer';
import { CartContext } from '../components/Context';

function Sofas() {

    const filterSofas = Products.filter((product) => product.item === 'Sofa');
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <Row className="justify-content-center">
                {filterSofas.map((sofas) => (
                    <Col md={3} className="m-3">
                        <Card style={{ width: '18rem' }} key={sofas.id}>

                            <Card.Img variant="top" src={sofas.image} />

                            <Card.Body>
                                <Card.Title>{sofas.title}</Card.Title>
                                <Card.Text>{sofas.item}</Card.Text>
                                <Card.Text><FaRupeeSign /><b>{sofas.price}</b> </Card.Text>
                                <Button onClick={()=>addToCart(sofas)}><BsCartPlusFill /></Button>
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

export default Sofas