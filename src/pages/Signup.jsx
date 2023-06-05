import React, { useState } from 'react';
import { toast } from "react-toastify";
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
import { useNavigate } from 'react-router-dom';

function Login() {

    const [id, idChange] = useState('');
    const [name, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [mobile, mobileChange] = useState('');
    const [password, passwordChange] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let regObj = { id, name, email, mobile, password };
        console.log(regObj);

        fetch("http://localhost:8000/user", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regObj)
        }).then((res) => {
            alert('success')
            navigate('/login')
        }).catch((err) => {
            toast.error('failed')
        })
    }

    return (
        <MDBContainer className="my-5" style={{ width: '800px',backgroundImage:"url('https://wallpapercave.com/wp/wp2844805.jpg')" }}>
            <MDBCard>
                <MDBRow className="g-0">
                    <MDBCol md="6">
                        <MDBCardImage
                            src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="login form"
                            className="rounded-start w-100 h-100"
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBCardBody className="d-flex flex-column">

                            <div className="d-flex flex-row mt-2">
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Register</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                                Sign into your account
                            </h5>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" value={id} onChange={e => idChange(e.target.value)} />
                                <MDBInput wrapperClass="mb-2" label="Name" id="formControlLg" type="name" size="lg"
                                    value={name} onChange={e => nameChange(e.target.value)} required />
                                <MDBInput wrapperClass="mb-2" label="Email address" id="formControlLg" type="email" size="lg"
                                    value={email} onChange={e => emailChange(e.target.value)} required />
                                <MDBInput wrapperClass="mb-2" label="Mobile Number" id="formControlLg" type="mobile" size="lg"
                                    value={mobile} onChange={e => mobileChange(e.target.value)} required />
                                <MDBInput wrapperClass="mb-2" label="Password" id="formControlLg" type="password" size="lg"
                                    value={password} onChange={e => passwordChange(e.target.value)} required />

                                <MDBBtn type='submit' className="mb-4 px-5" color="primary" size="lg">
                                    Signup
                                </MDBBtn>
                            </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Login;
