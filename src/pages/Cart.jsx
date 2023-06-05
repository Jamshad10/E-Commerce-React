import React, { useContext } from 'react';
import { CartContext } from '../components/Context';
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { BsCart3 } from 'react-icons/bs';
import Footer from './Footer';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from 'react-bootstrap';

function Cart() {
  const { cartItems, removeItem } = useContext(CartContext);
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div>
      <h2 style={{
        textAlign: "center",
        marginTop: '20px',
        marginBottom: '20px',
        color: 'white',
        fontFamily:'cursive'
      }}>
        <BsCart3 />
        Shoping Cart
      </h2>
      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: '10px', color: 'white' }}>Your cart is empty!</h2>
      ) : (
        <div>
          {cartItems.map((item) => (
            <section className=" h-100" >
              <MDBContainer className="py-1 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol md="10">


                    <MDBCard className="rounded-3 ">
                      <MDBCardBody className="p-4">
                        <MDBRow className="justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              className="rounded-3"
                              fluid
                              src={item.image}
                              alt="product_image"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <p className="lead fw-normal mb-2">{item.title}</p>
                            <p>
                              <span className="text-muted">{item.item} </span>

                            </p>
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="2" className="d-flex align-items-center justify-content-around">
                            <Button><FaPlus /></Button>

                            <MDBInput min={0} defaultValue={1} type="text" size="sm" className='text-center m-lg-2' />
                            <Button style={{ marginLeft: '18px' }}><AiOutlineMinus /></Button>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                            <MDBTypography tag="h5" className="mb-0">
                              <FaRupeeSign /> {item.price}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="d-flex  justify-content-around">
                            <Button variant="danger" style={{ marginRight: '20px' }} onClick={() => handleRemoveItem(item.id)}><AiFillDelete /></Button>
                            <Button variant="success" style={{ marginRight: '30px' }} >Buy</Button>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

          )
          )}
        </div>

      )}
      <Footer />
    </div>
  );
}

export default Cart;
