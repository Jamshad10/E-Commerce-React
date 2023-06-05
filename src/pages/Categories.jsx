import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ImStarFull,ImStarHalf } from "react-icons/im";

function Categories() {
  return (
    <div style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2844805.jpg')" }}>
      <Row className="justify-content-center">
        <Col md={3} className="m-3">
          <Card style={{ width: '18rem' }}>
            <Link to='/sofa'>
              <Card.Img variant="top" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_1.jpg" />
            </Link>
            <Card.Body>
              <Card.Title>Sofas</Card.Title>
              <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="m-3">
          <Card style={{ width: '18rem' }}>
            <Link to='/chair'>
              <Card.Img variant="top" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_12.jpg" />
            </Link>
            <Card.Body>
              <Card.Title>Gaming Chairs</Card.Title>
              <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="m-3">
          <Card style={{ width: '18rem' }}>
            <Link to='/bed'>
              <Card.Img variant="top" src="https://ii1.pepperfry.com/assets/bc655f_1676553477070_Furniture_1280_shopbestsellers_15feb_1.jpg" />
            </Link>
            <Card.Body>
              <Card.Title>Beds</Card.Title>
              <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="m-3">
          <Card style={{ width: '18rem' }}>
            <Link to='/mixer'>
              <Card.Img variant="top" src="https://ii1.pepperfry.com/media/wysiwyg/banners/appliances_1440_category_16feb_1.jpg" />
            </Link>
            <Card.Body>
              <Card.Title>Mixers & Processors</Card.Title>
              <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="m-3">
          <Card style={{ width: '18rem' }}>
            <Link to='/fan'>
              <Card.Img variant="top" src="https://ii1.pepperfry.com/media/wysiwyg/banners/appliances_1440_category_16feb_10.jpg" />
            </Link>
            <Card.Body>
              <Card.Title>Fans</Card.Title>
              <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="m-3">
          <Card style={{ width: '18rem' }}>
            <Link to='/lamb'>
            <Card.Img variant="top" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Lamps_and_lighting_1440_category_15feb_3.jpg" />
            </Link>
            <Card.Body>
              <Card.Title>Lambs & Lighting</Card.Title>
              <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Categories;