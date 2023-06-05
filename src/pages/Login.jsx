import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

function Login() {

    const [email, emailUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const navigate = useNavigate();

    const proceedLogin = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:8000/user/" )
            .then((res) => res.json())
            .then((resp) => {
                console.log(resp);
                if (Object.keys(resp).length === 0) {
                    alert('Please enter a valid email');
                } else {
                    if (resp[0].password === password) {
                        alert('Login Success');
                        navigate('/');
                    } else {
                        alert('Please enter valid credentials');
                    }
                }
            })
            .catch((err) => {
                alert('Login Failed');
            });
    };
    

    return (
        <div style={{backgroundImage:"url('https://wallpapercave.com/wp/wp2844805.jpg')"}}>
        <MDBContainer className="my-5" >
            <MDBCard>
                <MDBRow className="g-0">
                    <MDBCol md="6">
                        <MDBCardImage
                            src="https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzE1NTkzLXdpa2ltZWRpYS1pbWFnZS1rb3diZ25wbS5qcGc.jpg"
                            alt="login form"
                            className="rounded-start w-100"
                            style={{ height: 'auto', maxHeight: '600px' }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBCardBody className="d-flex flex-column">

                            <div className="d-flex flex-row mt-2">
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Welcome!</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                                Login your account
                            </h5>
                            <form onSubmit={proceedLogin}>
                                <MDBInput wrapperClass="mb-4" label="Email address" id="emailcontrol" type="email" size="lg"
                                    value={email} onChange={e => emailUpdate(e.target.value)} />
                                <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg"
                                    value={password} onChange={e => passwordUpdate(e.target.value)} />

                                <MDBBtn type='submit' className="mb-4 px-5" color="dark" size="lg">
                                    Login
                                </MDBBtn>
                            </form>
                            <a className="small text-muted" href="#!">
                                Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                Don't have an account? <Link to='/signup' style={{ color: '#393f81' }}>Register here</Link>
                            </p>

                            <div className="d-flex flex-row justify-content-start">
                                <a href="#!" className="small text-muted me-1">
                                    Terms of use.
                                </a>
                                <a href="#!" className="small text-muted">
                                    Privacy policy
                                </a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
        </div>
    );
}

export default Login;
